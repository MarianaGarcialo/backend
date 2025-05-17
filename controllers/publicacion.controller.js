const Publicacion = require("../models/publicacion")
const boom = require("@hapi/boom")
const PublicacionCtrl = {}

/**
 * Middleware de ejemplo
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */

PublicacionCtrl.postPublicacion = async (req, res, next) => {
    try {
        const newPublicacion = req.body
        const postPublicacion = await Publicacion.create(newPublicacion)
        res.status(200).send({
            status: 200,
            message: "Se ha creado con exito",
            data: postPublicacion
        })
    } catch (error) {
        res.status(500).send({
            status: 500,
            message: "ha ocurrido un error en la creación de la publicación",
            error: error.message
        })

    }
}

PublicacionCtrl.getPublicacionByid = async (req, res, next) => {
    try {
        const id = req.params.id
        const publicacion = await Publicacion.findById(id)
        res.status(200).send({
            status: 200,
            message: "Se ha obtenido con exito",
            data: publicacion
        })
    } catch (error) {
        res.status(500).send({
            status: 200,
            message: "Ha ocurrido un error al obtener publicacion",
            error: error.message
        })
    }
     }



    PublicacionCtrl.getPublicacion = async (req, res, next) => {
        try {
            const Publicaciones = await Publicacion.find()
            res.status(200).send({
                status: 200,
                message: "Se han obtenido con exito",
                data: Publicaciones
            })
        } catch (error) {
            res.status(500).send({
                status: 500,
                message: "ha ocurrido un error al obtener todas las publicaciones",
                error: error.message
            })

        }
    }

    module.exports = PublicacionCtrl