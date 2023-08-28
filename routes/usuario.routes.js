// TODO: Importar controladores de reservas, luego vincular rutas con controladores

const { Router } = require("express");
const router = Router();

const {
   // Obtener un única reserva
   crearUsuario,
  eliminarUsuario,
} = require("../controllers/usuario.controllers");

// ==========================================
//         Rutas para renderizar vistas
// ==========================================


// Formulario para crear una reserva
//router.get("/crearUsuario", renderFormcrearUsuario);




// Crear una reserva
router.post("/api", crearUsuario);


// Eliminar una reserva de forma lógica
router.delete("/api/:id", eliminarUsuario);

module.exports = router;
