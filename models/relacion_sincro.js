const { DataTypes, sequelize } = require("../database");
const Usuario = require("./usuario");
const Cancion = require("./cancion");
const Playlist = require("./playlist");
const app = require("../app")

const port = process.env.PORT;
// Relaciones
Usuario.hasMany(Playlist, {as: "playlists", foreignKey: "usuarioId"  });
Playlist.belongsTo(Usuario, {as: "usuarios", foreignKey: "usuarioId"});

Playlist.belongsToMany(Cancion, {through: "playlist_cancion"});
Cancion.belongsToMany(Playlist, {through: "playlist_cancion"});

sequelize.models = {
    Usuario,
    Playlist,
    Cancion
}
// Sincronizar tablas con la base de datos
sequelize.sync({ force: false }).then(() => {
  console.log("Tablas de Usuario, Playlist, Cancion creada");
});

app.listen(port, () => console.log(`Server on http://localhost:${port}`));

module.exports = {
  Usuario,
  Playlist,
  Cancion,
};
