class LivroDAO {

    constructor(db) {
        this._db = db;
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM LIVROS',
                (err, resultados) => {
                    if (err) {
                        return reject('Não foi possível listar os livros.');
                    }
                    return resolve(resultados);
                }
            )
        });
    }
}

module.exports = LivroDAO;