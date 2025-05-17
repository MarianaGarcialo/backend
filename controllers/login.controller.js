const Contrasena = require("../models/contrasena")
const boom = require("@hapi/boom")
const LoginCtrl = {}

/**
 * Middleware de ejemplo
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

LoginCtrl.auth=async(req, res, next) =>{
    try {
        const user=req.body
      if (!user.email && !user.email.endsWith('@amigo.edu.co')) {
  throw new Error("Correo no Valido")
}

const contrasena= await Contrasena.find()

if (user.password !=contrasena[0].contrasena){
    throw new Error("Contraseña incorrecta")
}

res.status(200).send({
    status: 200,
            message: "Se ha iniciado sesión con exito",
            data: true
})
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "ha ocurrido un error  al iniciar sesión",
            error: error.message
        })
    }
}

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