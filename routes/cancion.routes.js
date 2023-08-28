const { Router } = require("express");
const createCancionSchema= require("../validator/cancion.schema")
const router =  Router();

const {
    crearCancion,
    obtenerCanciones
} = require ("../controllers/cancion.controllers.js");
const validateSchema = require("../middleware/validation");

router.get("/api/cancion", obtenerCanciones);
router.post("/api/cancion",createCancionSchema ,validateSchema,crearCancion);

module.exports = router;