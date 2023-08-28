// TODO: Importar controladores de reservas, luego vincular rutas con controladores

const { Router } = require("express");
const createUserSchema = require("../validator/usuario.schema") //y esto
const router = Router();

const {
    crearUsuario,
    eliminarUsuario,
} = require("../controllers/usuario.controllers");
const validateSchema = require("../middleware/validation");


router.post("/api/users/", createUserSchema, validateSchema ,crearUsuario); //se agrega esto



router.delete("/api/users/:id", eliminarUsuario);

module.exports = router;
