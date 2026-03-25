const db = require('../config/db');


// 🔹 Obtener todas las películas con género, director, tipo, productora e imagen
exports.getPeliculas = (req, res) => {

    const sql = `
        SELECT 
            p.id,
            p.titulo,
            p.anio,
            g.nombre AS genero,
            d.nombre AS director,
            t.nombre AS tipo,
            pr.nombre AS productora,
            p.imagen,
            p.estado
        FROM peliculas p
        LEFT JOIN genero g ON p.genero_id = g.id
        LEFT JOIN director d ON p.director_id = d.id
        LEFT JOIN tipo t ON p.tipo_id = t.id
        LEFT JOIN productora pr ON p.productora_id = pr.id
    `;

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        res.json(results);
    });
};


// 🔹 Obtener película por ID
exports.getPeliculaById = (req, res) => {

    const { id } = req.params;

    const sql = `
        SELECT 
            p.id,
            p.titulo,
            p.anio,
            g.nombre AS genero,
            d.nombre AS director,
            t.nombre AS tipo,
            pr.nombre AS productora,
            p.imagen,
            p.estado
        FROM peliculas p
        LEFT JOIN genero g ON p.genero_id = g.id
        LEFT JOIN director d ON p.director_id = d.id
        LEFT JOIN tipo t ON p.tipo_id = t.id
        LEFT JOIN productora pr ON p.productora_id = pr.id
        WHERE p.id = ?
    `;

    db.query(sql, [id], (err, results) => {

        if (err) return res.status(500).json({ error: err.message });

        if (results.length === 0) {
            return res.status(404).json({ message: 'Película no encontrada' });
        }

        res.json(results[0]);
    });
};


// 🔹 Crear película
exports.createPelicula = (req, res) => {

    const { titulo, anio, genero_id, director_id, tipo_id, productora_id, imagen, estado } = req.body;

    if (!titulo || !anio) {
        return res.status(400).json({ message: 'Título y año son obligatorios' });
    }

    const sql = `
        INSERT INTO peliculas 
        (titulo, anio, genero_id, director_id, tipo_id, productora_id, imagen, estado) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [titulo, anio, genero_id, director_id, tipo_id, productora_id, imagen, estado ?? 1],
        (err, result) => {

            if (err) return res.status(500).json({ error: err.message });

            res.status(201).json({
                message: 'Película creada correctamente',
                id: result.insertId
            });
        }
    );
};


// 🔹 Actualizar película
exports.updatePelicula = (req, res) => {

    const { id } = req.params;
    const { titulo, anio, genero_id, director_id, tipo_id, productora_id, imagen, estado } = req.body;

    const sql = `
        UPDATE peliculas 
        SET titulo=?, anio=?, genero_id=?, director_id=?, tipo_id=?, productora_id=?, imagen=?, estado=? 
        WHERE id=?
    `;

    db.query(
        sql,
        [titulo, anio, genero_id, director_id, tipo_id, productora_id, imagen, estado, id],
        (err, result) => {

            if (err) return res.status(500).json({ error: err.message });

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Película no encontrada' });
            }

            res.json({ message: 'Película actualizada correctamente' });
        }
    );
};


// 🔹 Eliminar película
exports.deletePelicula = (req, res) => {

    const { id } = req.params;

    db.query(
        'DELETE FROM peliculas WHERE id=?',
        [id],
        (err, result) => {

            if (err) return res.status(500).json({ error: err.message });

            if (result.affectedRows === 0) {
                return res.status(404).json({ message: 'Película no encontrada' });
            }

            res.json({ message: 'Película eliminada correctamente' });
        }
    );
};