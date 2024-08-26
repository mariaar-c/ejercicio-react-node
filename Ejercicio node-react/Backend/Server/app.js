const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');  // Importa el módulo 'path'
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

const usuarios = [
  { username: 'usuario1', password: 'contraseña1' },
  { username: 'usuario2', password: 'contraseña2' }
];

// Middleware
app.use(express.json());  // Middleware para parsear JSON
app.use(cors());  // Middleware para manejar CORS
app.use(express.static(path.join(__dirname, 'build')));  // Middleware para servir archivos estáticos

// Ruta de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const usuario = usuarios.find(u => u.username === username && u.password === password);
  if (usuario) {
    res.status(200).json({ message: 'Login exitoso' });
  } else {
    res.status(401).json({ message: 'Credenciales inválidas' });
  }
});


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


app.get('/', (req, res) => {
  res.send('Soy la mas Guapa de to Palencia');
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
