const db = require('../config/db').default;

// Obtener todos
exports.getDirectores = (req, res) => {
    db.query('SELECT * FROM director', (err, results) => {
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};

// Crear
exports.createDirector = (req, res) => {
    const { nombre } = req.body;

    db.query(
        'INSERT INTO director (nombre, estado) VALUES (?, 1)',
        [nombre],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Director creado', id: result.insertId });
        }
    );
};

// Actualizar
exports.updateDirector = (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;

    db.query(
        'UPDATE director SET nombre=? WHERE id=?',
        [nombre, id],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Director actualizado' });
        }
    );
};

// Eliminar lógico
exports.deleteDirector = (req, res) => {
    const { id } = req.params;

    db.query(
        'UPDATE director SET estado=0 WHERE id=?',
        [id],
        (err) => {
            if (err) return res.status(500).json(err);
            res.json({ message: 'Director eliminado' });
        }
    );
};