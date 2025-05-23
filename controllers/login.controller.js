const Contrasena = require("../models/contrasena")
const boom = require("@hapi/boom")
const LoginCtrl = {}

/**
 * Middleware de ejemplo
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

LoginCtrl.auth = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log(email,password)
    // Validación de email
    if (!email || !email.endsWith('@amigo.edu.co')) {
      throw new Error("Correo no válido. Debe ser del dominio @amigo.edu.co");
    }

    // Obtener la contraseña almacenada
    const contrasenaDoc = await Contrasena.findOne(); // mejor que .find()[0]

    if (!contrasenaDoc) {
      throw new Error("No hay contraseña registrada en el sistema.");
    }

    // Comparar contraseñas
    if (password !== contrasenaDoc.contrasena) {
      throw new Error("Contraseña incorrecta");
    }

    res.status(200).send({
      status: 200,
      message: "Se ha iniciado sesión con éxito",
      data: true
    });
  } catch (error) {
    res.status(500).send({
      status: 500,
      message: "Ha ocurrido un error al iniciar sesión",
      error: error.message
    });
  }
};


LoginCtrl.postContrasena = async (req, res, next) => {
    try {
        const newContrasena = req.body;
        const postContrasena = await Contrasena.create(newContrasena);

        res.status(200).send({
            status: 200,
            message: "Se ha creado con éxito",
            data: postContrasena
        });
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "Ha ocurrido un error en la creación de la contraseña",
            error: error.message
        });
    }
}


module.exports = LoginCtrl