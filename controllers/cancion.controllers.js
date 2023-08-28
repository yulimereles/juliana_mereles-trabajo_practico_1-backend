const Cancion = require('../models/cancion');
const cancionCtrl = {};



cancionCtrl.crearCancion = async (req, res) => {
    const { titulo, duracion, genero } = req.body;
    try{
        const nuevoCancion = await Cancion.create ({
            titulo,
            duracion,
            genero          
        });
        return res.status(201).json({ message: 'La cancion fue creada con éxito'});
    } catch(error) {
        console.log('Hubo un error al crear la cancion', error);
        return res.status(500).json({message: 'Hubo un error al crear la cancion'});
    }
};

cancionCtrl.obtenerCanciones = async (req, res) => {
    try {
        const canciones = await Cancion.findAll({
            where: {
                estado: true
            }
        });

        return res.json(canciones);
    } catch (error) {
        console.log('Error al obtener las Canciones', error);
        return res.status(500).json({
            message: 'Error al obtener las Canciones'
        })
    }
};

module.exports = cancionCtrl;
