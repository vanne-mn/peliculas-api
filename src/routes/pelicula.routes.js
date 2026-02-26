const express = require('express');
const router = express.Router();
const peliculaController = require('../controllers/pelicula.controller');

// Obtener todas las películas
router.get('/', peliculaController.getPeliculas);

// Obtener una película por ID
router.get('/:id', peliculaController.getPeliculaById);

// Crear película
router.post('/', peliculaController.createPelicula);

// Actualizar película
router.put('/:id', peliculaController.updatePelicula);

// Eliminar película
router.delete('/:id', peliculaController.deletePelicula);

module.exports = router;