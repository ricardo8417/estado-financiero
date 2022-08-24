var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');



// Objeto global de la app
var app = express();

// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*********************** Mongoose Configuration *******************************/
const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://RICARDO:Bedu@cluster0.nfsc5.mongodb.net/appfinanciero?retryWrites=true&w=majority"
);
mongoose.set("debug", true);
require("./models/Usuario");
require('./config/passport');
// require('./models/Mascota');

/*********************** Mongoose Configuration *******************************/
// Agregamos el código de nuestro router (routes/index.js)

app.use('/v1', require('./routes'));


app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Iniciando el servidor...
var server = app.listen(process.env.PORT || 3000, function() {
    console.log("##############");
    console.log("### API REST ###");
    console.log("##############");
    console.log('Escuchando en el puerto ' + server.address().port);

    // console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);

});