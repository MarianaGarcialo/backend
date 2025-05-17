const express = require('express')
const router = express.Router()
const LoginCtrl = require("../controllers/login.controller")

router.post("/iniciar_sesion", LoginCtrl.auth)
router.post("/", LoginCtrl.postContrasena)

module.exports = router;
