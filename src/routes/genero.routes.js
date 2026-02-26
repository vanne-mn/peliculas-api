const express = require('express');
const router = express.Router();
const generoController = require('../controllers/genero.controller');

router.get('/', generoController.getGeneros);
router.post('/', generoController.createGenero);
router.put('/:id', generoController.updateGenero);
router.delete('/:id', generoController.deleteGenero);

module.exports = router;