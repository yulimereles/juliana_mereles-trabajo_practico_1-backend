require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");

 const { body, validationResult } = require('express-validator');


const { sequelize } = require("./database");

 
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
 //app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname, "public")));

app.post('/',
  body('email').notEmpty().isEmail(),
  body('password').notEmpty(),
  (req, res) => {
    const errors = validationResult(req);

    if (errors.isEmpty()) {
      return res.json(req.body);
    }
    console.log(req.body);
    res.status(400).json(errors.array());
  });


  
app.use( "/", require("./routes/playlist.routes"));
app.use( "/", require("./routes/usuario.routes"));
app.use( "/", require("./routes/cancion.routes"));

// TODO: Si la petición no coincide con ninguna de las rutas declaradas, mostrar error 404
app.use((req, res, next) => {
  return res.status(404).render("404");
});

module.exports = app;


