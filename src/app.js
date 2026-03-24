const express = require('express');
const cors = require('cors');
const path = require('path');

const generoRoutes = require('./routes/genero.routes');
const directorRoutes = require('./routes/director.routes');
const productoraRoutes = require('./routes/productora.routes');
const tipoRoutes = require('./routes/tipo.routes');
const mediaRoutes = require('./routes/media.routes');
const peliculaRoutes = require('./routes/pelicula.routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// 🔥 Servir toda la carpeta public (HTML + imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas API
app.use('/api/generos', generoRoutes);
app.use('/api/directores', directorRoutes);
app.use('/api/productoras', productoraRoutes);
app.use('/api/tipos', tipoRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/peliculas', peliculaRoutes);

module.exports = app;

js
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor corriendo en puerto " + PORT);
});
