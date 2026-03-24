const express = require('express');
const cors = require('cors');
const path = require('path');

// 🔥 IMPORTAR RUTAS
const generoRoutes = require('./routes/genero.routes');
const directorRoutes = require('./routes/director.routes');
const productoraRoutes = require('./routes/productora.routes');
const tipoRoutes = require('./routes/tipo.routes');
const mediaRoutes = require('./routes/media.routes');
const peliculaRoutes = require('./routes/pelicula.routes');

const app = express();

// 🔹 Middlewares
app.use(cors());
app.use(express.json());

// 🔹 Archivos estáticos (HTML + imágenes)
app.use(express.static(path.join(__dirname, 'public')));

// 🔥 PRUEBA: SOLO UNA RUTA ACTIVA
// (para encontrar el error)

// app.use('/api/generos', generoRoutes);
// app.use('/api/directores', directorRoutes);
// app.use('/api/productoras', productoraRoutes);
// app.use('/api/tipos', tipoRoutes);
// app.use('/api/media', mediaRoutes);

app.use('/api/peliculas', peliculaRoutes);

// 🔹 Ruta base de prueba
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

module.exports = app;
