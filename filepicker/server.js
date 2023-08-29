const express = require('express');
const multer = require('multer'); // Middleware para manejar la carga de archivos
const cors = require('cors'); // Importa el middleware cors
const app = express();
const port = 3001; // Puedes cambiar el puerto si lo deseas

// Configura multer para guardar los archivos en una carpeta llamada "uploads"
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// Usa cors como middleware global para permitir todas las solicitudes de origen cruzado
app.use(cors());

// Ruta para manejar la carga de archivos
app.post('/upload', upload.single('file'), (req, res) => {
  res.send('Archivo subido con éxito');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
