const db = require('../config/db').default;

exports.getGeneros = (req, res) => {
    db.query('SELECT * FROM genero', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

exports.createGenero = (req, res) => {
    const { nombre } = req.body;

    db.query(
        'INSERT INTO genero (nombre) VALUES (?)',
        [nombre],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Género creado', id: result.insertId });
        }
    );
};

exports.updateGenero = (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;

    db.query(
        'UPDATE genero SET nombre=? WHERE id=?',
        [nombre, id],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Género actualizado' });
        }
    );
};

exports.deleteGenero = (req, res) => {
    const { id } = req.params;

    db.query(
        'DELETE FROM genero WHERE id=?',
        [id],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Género eliminado' });
        }
    );
};