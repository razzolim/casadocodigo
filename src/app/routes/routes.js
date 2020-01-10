module.exports = (app) => {
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
        res.marko(
            require('../view/livros/lista/lista.marko'),
            {
                livros: [
                    {
                        id: 1,
                        titulo: 'Fundamentos de Node'
                    },
                    {
                        id: 2,
                        titulo: 'Node avançado'
                    }
                ]
            }
        );
    });


};