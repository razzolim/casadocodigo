const express = require('express');
const app = express();

app.listen(3000, function () {
    console.log(`Servidor rodando na porta 3000`);
});

app.get('/', function (req, res) {
    res.send(` 
    <html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <h1> Casa do Código </h1>
    </body> 
        </html>`);
});

app.get('/livros', function (req, res) {
    res.send(` 
    <html>
    <head>
        <meta charset="utf-8">
    </head>
    <body>
        <h1> Listagem de Livros </h1>
    </body> 
        </html>`);
});


// const http = require('http');

// const servidor = http.createServer(function(req, resp) {

// });
// servidor.listen(3000);