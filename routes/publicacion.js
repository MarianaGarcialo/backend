const express = require('express')
const router = express.Router()
const PublicacionCtrl = require("../controllers/publicacion.controller")
const upload = require('../utils/multer')

router.post("/",upload.single('file'), PublicacionCtrl.postPublicacion)
router.get("/:id", PublicacionCtrl.getPublicacionByid)
router.get("/", PublicacionCtrl.getPublicacion)

module.exports = router;