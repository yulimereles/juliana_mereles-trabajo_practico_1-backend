const { DataTypes, sequelize } = require("../database");
const Usuario = require("./usuario");
const Cancion = require("./cancion");
const Playlist = require("./playlist");
const app = require("../app");
const port = process.env.PORT

// Relaciones
Usuario.hasMany(Playlist, {as: "playlists", foreignKey: "usuarioId"  });
Playlist.belongsTo(Usuario, {as: "usuarios", foreignKey: "usuarioId"});

Playlist.belongsToMany(Cancion, {through: "playlist_cancion"});
Cancion.belongsToMany(Playlist, {through: "playlist_cancion"});

//Conexión a base de datos
// console.log(sequelize);

sequelize.models = {
  Usuario,
  Playlist,
  Cancion
}
// Sincronizar tablas con la base de datos

// sequelize
// .authenticate()
// .then(() => {
//   console.log("Conexión a base de datos exitosa")
// })
// .catch((error) => console.log("Error al conectar a base de datos", error));

sequelize.sync({ force: false }).then(() => {
  console.log("Tablas de Usuario, Playlist, Cancion creada");
  app.listen(port, () => console.log(`Server on http://localhost:${port}`));
});
module.exports = {
  Usuario,
  Playlist,
  Cancion,
};
