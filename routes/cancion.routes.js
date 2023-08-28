const { Router } = require("express");
const router =  Router();

const {
    crearCancion,
    obtenerCanciones
} = require ("../controllers/cancion.controllers.js");

router.get("/api/cancion", obtenerCanciones);
router.post("/api/cancion", crearCancion);

module.exports = router;