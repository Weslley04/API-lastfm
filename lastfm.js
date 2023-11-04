const http = require('http');
const url = require('url');
const axios = require('axios');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const queryObject = url.parse(req.url, true).query;
    const artistName = queryObject.artist || 'Michael Jackson';

    const apiKey = 'c262698c6b0a8730102e54e6aa98ddf0';
    const baseUrl = 'http://ws.audioscrobbler.com/2.0/';
    const method = 'artist.getinfo';

    const apiUrl = `${baseUrl}?method=${method}&artist=${artistName}&api_key=${apiKey}&format=json`;

    axios.get(apiUrl)
        .then((response) => {
            const artistInfo = response.data.artist;

            res.write('<h1>' + artistInfo.name + '</h1>');
            res.write('<p>' + artistInfo.tags.tag[0].name + '</p>');
            res.write('<p>' + artistInfo.bio.summary + '</p>');

            if (artistInfo.image) {
                // Pega a URL da imagem média (pode usar outros tamanhos, como small, large, etc.)
                const imageUrl = artistInfo.image.find((img) => img.size === 'medium')['#text'];
                res.write(`<img src="${imageUrl}" alt="${artistInfo.name}">`);
            }

            res.end();
        })
        .catch((error) => {
            console.error('Erro na requisição:', error);
        });
}).listen(8080);

console.log('Servidor rodando em http://localhost:8080');