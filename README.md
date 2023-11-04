O link da API se encontra no site (https://www.last.fm/home), o Last.fm API.

A API do Last.fm é uma API que fornece informações sobre artistas, músicas, álbuns, tags e outras informações relacionadas à música. Ela permite que você acesse dados sobre artistas, incluindo seus nomes, gêneros, biografias e imagens(caso esteja disponível no site da API). Assim que você Acessar a URL, deverá exibir o nome do artista e a biografia dele.

Parâmetro de Busca: Neste código, o parâmetro de busca é artistName, que é passado como parte da URL. Por padrão, ele é definido como 'Michael Jackson', mas você pode alterá-lo na URL para pesquisar informações sobre diferentes artistas. Por exemplo, se você quiser buscar informações sobre outro artista, basta acessar uma URL com o parâmetro artist, por exemplo, http://localhost:8080?artist=Madonna, para buscar informações sobre Madonna.

Passo a passo: Passo 1 - Digite no terminal: "npm init -y", Passo 2: Digite no terminal: “npm install axios” para instalar as bibliotecas utilizadas no projeto; Passo 3 - Digite no terminal: "node lastfm.js", uma mensagem será exibida: Servidor rodando em http://localhost:8080 ; Passo 4 - Abra seu navegador e coloque a URL: localhost8080.
