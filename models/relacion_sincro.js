const { DataTypes, sequelize } = require("../database");
// Relaciones
Usuario.hasMany(Playlist);
Playlist.belongsTo(Usuario);

Playlist.hasMany(Cancion);
Cancion.belongsTo(Playlist);

// Sincronizar tablas con la base de datos
Usuario,Playlist,Cancion.sync({ force: false }).then(() => {
  console.log("Tabla de Music creada con");
});

module.exports = {
  Usuario,
  Playlist,
  Cancion,
};
