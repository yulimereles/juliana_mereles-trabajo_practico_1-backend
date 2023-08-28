const { checkSchema } = require('express-validator');

const createUserSchema = checkSchema({
  username: {
    notEmpty: {
      errorMessage: 'El nombre de Usuario es obligatorio',
    },
    isLength: {
      options: { min: 8 },
      errorMessage: 'El nombre del Usuario debe al menos tener 8 caracteres',
    },
  },
  name: {
    notEmpty: {
      errorMessage: 'El nombre es obligatorio',
    },
  },
  email: {
    errorMessage: 'Correo electrónico no válido',
    isEmail: true,
  },
  password: {
    isLength: {
      options: { min: 8 },
      errorMessage: 'La contraseña al menos debe tener 8 caracteres',
    },
  },
});


module.exports = createUserSchema;