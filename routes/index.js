const express = require("express");
const boom = require("@hapi/boom");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const pathRouter = __dirname;

const removeExtension = (fileName) => {
  return fileName.split(".").shift();
};

// Ruta raíz para estado de la API
router.get("/", (req, res) => {
  res.status(200).json({ message: "API funcionando correctamente" });
});

// Carga dinámica de rutas en /api/{nombreArchivo}
fs.readdirSync(pathRouter).forEach((file) => {
  const name = removeExtension(file);
  if (name !== "index") {
    router.use(`/api/${name}`, require(path.join(pathRouter, file)));
    console.log("Ruta cargada -----> ", name, " <-------");
  }
});

// Manejo de rutas no encontradas
router.all("*", (req, res, next) => {
  console.log(`Acceso a la ruta: ${req.method} ${req.originalUrl}`);
  next(boom.notFound(`Ruta ${req.originalUrl} no encontrada`));
});

module.exports = router;
