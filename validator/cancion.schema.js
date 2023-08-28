const { checkSchema } = require('express-validator');

const createCancionSchema = checkSchema({
    titulo: {
        notEmpty: {
          errorMessage: 'El título de la canción es obligatorio',
        },
        isLength: {
          options: { min: 3, max: 50 },
          errorMessage: 'El título debe tener entre 3 y 50caracteres',
        },
      },
      duracion: {
        notEmpty: {
          errorMessage: 'La duración de la canción es obligatorio',
        },
        isNumeric: {
          errorMessage: 'La duración debe ser un valor numérico',
        },
      },
      genero: {
        notEmpty: {
          errorMessage: 'El género de la canción es obligatorio',
        },
        isLength: {
          options: { max: 50 },
          errorMessage: 'El género no debe exceder los 50 caracteres',
        },
      },
    });
    
module.exports = createCancionSchema;