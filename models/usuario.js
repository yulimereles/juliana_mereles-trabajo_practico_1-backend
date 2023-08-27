const { DataTypes, sequelize } = require("../database");

// Usuario
const Usuario = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "usuarios",
  }
);


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

