const { DataTypes, sequelize } = require("../database");

// Playlist
const Playlist = sequelize.define(
    "Playlist",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      creationDate: {
        type: DataTypes.DATEONLY,
      },
      updateDate: {
        type: DataTypes.DATEONLY,
      },
    },
    {
      tableName: "playlists",
    }
  );