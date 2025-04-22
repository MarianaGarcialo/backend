const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { connectDB } = require("./database/config/database");

// Cargar variables de entorno
dotenv.config();

const app = express();

app.use(cors()); // Habilitar CORS para todas las rutas
app.use(express.json()); // Parsear JSON

// Puerto desde .env o por defecto
const PORT = process.env.PORT || 3000;

// Ruta base de prueba
app.get("/", (req, res) => {
  res.send("¡Servidor Express con CORS funcionando!");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
connectDB()