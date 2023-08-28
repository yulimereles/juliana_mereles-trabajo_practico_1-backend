const Playlist= require('../models/playlist');
const ctrl = {};

ctrl.renderListaPlaylist = (req, res) => {
    res.render('listado-playlist')
}

ctrl.renderFormNuevaPlaylist = (req, res) => {
    res.render('nueva-playlist');
}

ctrl.renderFormEditarPlaylist = (req, res) => {
    const { id } = req.params;
    res.render('editar-playlist', { id })
}



ctrl.obtenerPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.findAll();

        return res.json(playlists);
    } catch (error) {
        console.log('Error al obtener las Playlists', error);
        return res.status(500).json({
            message: 'Error al obtener las Playlists'
        })
    }
}


ctrl.obtenerPlaylistPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const playlist = await Playlist.findByPk(id);
        return res.json(playlist);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error al obtener la playlist'
        })
    }
}


ctrl.crearPlaylist = async (req, res) => {
    const {
       nombre,
       descripcion

    } = req.body; // JSON.stringify(reserva);

    try {
        // Se crea una nueva instancia de reserva
        const nuevaPlaylist = new Playlist({
           nombre,
           descripcion
        });

        // Se guarda en la BD
        await nuevaPlaylist.save();

        return res.status(201).json({ message: 'Playlist creada con éxito' })
    } catch (error) {
        console.log('Error al crear la Playlist', error);
        return res.status(500).json({ message: 'Error al crear la Playlist' })
    }
}


ctrl.actualizarPlaylist = async (req, res) => {
    try {
        const { id } = req.params;
        const playlist = await Playlist.findByPk(id);
        await playlist.update(req.body)
        return res.json({
            message: 'Playlist actualizada exitosamente'
        });
    } catch (error) {
        console.log('Error al actualizar la Playlist', error);
        return res.status(500).json({
            message: 'Error al actualizar la Playlist'
        })
    }
}


ctrl.eliminarPlaylist = async (req, res) => {
    const { id } = req.params;
    try {
        const playlist = await Playlist.findByPk(id);
        await playlist.update({ estado: false });
        return res.json({ message: 'Playlist se eliminó correctamente' })
    } catch (error) {
        console.log('Error al eliminar la Playlist', error);
        return res.status(500).json({
            message: 'Error al eliminar la Playlist'
        })
    }
}

module.exports = ctrl;