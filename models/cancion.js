const { DataTypes, sequelize } = require("../database");
// Cancion
const Cancion = sequelize.define(
    "Cancion",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      duracion: {
        type: DataTypes.INTEGER,
      },
      genero: {
        type: DataTypes.STRING(100),
      },
    },
    {
      tableName: "canciones",
    }
  );

  module.exports = Cancion;