const { checkSchema } = require('express-validator');

const createPlaylistSchema = checkSchema({
    nombre: {
        notEmpty: {
          errorMessage: 'El nombre de la playlist es obligatorio',
        },
        isLength: {
          options: { min: 3, max: 50 },
          errorMessage: 'El nombre debe tener entre 3 y 50 caracteres',
        },
      },
      descripcion: {
        optional: true, 
        isLength: {
          options: { max: 200 },
          errorMessage: 'La descripción no debe exceder los 200 caracteres',
        },
      },
    });

module.exports = createPlaylistSchema; 