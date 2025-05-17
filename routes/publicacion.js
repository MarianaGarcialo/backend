const express = require('express')
const router = express.Router()
const PublicacionCtrl = require("../controllers/publicacion.controller")

router.post("/", PublicacionCtrl.postPublicacion)
router.get("/:id", PublicacionCtrl.getPublicacionByid)
router.get("/", PublicacionCtrl.getPublicacion)

module.exports = router;
