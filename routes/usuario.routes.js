// TODO: Importar controladores de reservas, luego vincular rutas con controladores

const { Router } = require("express");
const router = Router();

const {
   // Obtener un única reserva
    crearUsuario,
    eliminarUsuario,
} = require("../controllers/usuario.controllers");


router.post("/api", crearUsuario);



router.delete("/api/:id", eliminarUsuario);

module.exports = router;
