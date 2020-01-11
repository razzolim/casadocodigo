const db = require('../../config/database');

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

    app.get('/livros', function (req, resp) {
        db.all('SELECT * FROM LIVROS', function(err, result) {

            resp.marko(
                require('../view/livros/lista/lista.marko'),
                {
                    livros: result
                }
            );
        });
    });


};