const Usuario = require('../models/usuario');

const usuarioCtrl = {};


usuarioCtrl.crearUsuario = async (req, res) => {
    const { name, username, email, password } = req.body;
    try{
        const nuevoUsuario = await Usuario.create ({
            name: name,
            username: username,
            email: email,
            password: password

        });
        return res.status(201).json({ message: 'Su usuario fue creado con éxito'});
    } catch(error) {
        console.log('Hubo un error al crear el usuario', error);
        return res.status(500).json({message: 'Hubo un error al crear el usuario'});
    }
};

usuarioCtrl.eliminarUsuario = async (req, res) => {
    const { id } = req.params;

    try{
        const usuario = await Usuario.findByPk(id);
        if(!usuario){
            return res.status(404).json({message: 'Usuario no encontrado'});
    }
    await usuario.destroy();

    return res.json({ message: ' Se elimino con éxito este Usuario'});
} catch (error){
    console.log(' Ocurrio un error al eliminar el usuario', error);
    return res.status(500).json({ message: 'Ocurrio un error al eliminar el usuario'});
}
};

module.exports = usuarioCtrl;