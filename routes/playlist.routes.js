const { Router } = require("express");
const createPlaylistSchema = require("../validator/playlist.schema") 
const router =  Router();

const {
    renderListaPlaylist,
    renderFormNuevaPlaylist, 
    renderFormEditarPlaylist,
    obtenerPlaylists,
    obtenerPlaylistPorId,
    crearPlaylist,
    actualizarPlaylist,
    eliminarPlaylist,
} = require( '../controllers/playlist.controllers');
const validateSchema = require("../middleware/validation");

router.get("/playlist", renderListaPlaylist);
router.get("/crear-playlist",renderFormNuevaPlaylist);
router.get("/actualizarPlaylist/:id", renderFormEditarPlaylist);


router.get("/api/playlists", obtenerPlaylists);
router.get("/api/playlists/:id", obtenerPlaylistPorId);
router.post("/api/playlists",createPlaylistSchema, validateSchema ,crearPlaylist  );
router.put("/api/playlists/:id", actualizarPlaylist);
router.delete("/api/playlists/:id", eliminarPlaylist );

module.exports = router;