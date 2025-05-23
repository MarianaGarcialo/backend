const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path"); // 👈 NECESARIO PARA RESOLVER EL PATH
const { connectDB } = require("./database/config/database");
const router = require("./routes");

dotenv.config();

const app = express();

// CORS solo permite conexión desde el frontend en localhost:4200
app.use(cors({
  origin: 'http://localhost:4200'
}));

app.use(express.json());

// Ruta para archivos estáticos (como imágenes)
app.use('/public/images', express.static(path.resolve(__dirname, 'database', 'storage')));

// Tus rutas API
app.use(router);

const PORT = process.env.PORT || 3000;

// Ruta base de prueba
app.get("/", (req, res) => {
  res.send("¡Servidor Express con CORS funcionando!");
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// Conexión a base de datos
connectDB();
