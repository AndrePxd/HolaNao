require('dotenv').config()
//Dependencias
// Inicio express
const express = require('express');
const cors = require('cors');
//body parser --> middleware
const bodyParser = require('body-parser');
const { databaseService } = require('./service/databaseService');


// Instancio la aplicacion con express
const app = express();

//Inicio el middleware 
app.use(bodyParser.json());
app.use(cors());
app.use(
    express.urlencoded({
    extended : true
    })
)
app.use(
    express.json({
    type : '*/*'
    })
)

// Conectarme con el archivo routes.js
const dbService = databaseService();
require('./routes')(app, dbService);

// app.set('views', path.join(__dirname, 'views'));
app.set('view-engine','html');


app.get('/',(req, res) =>{
    console.log(__dirname+'/front/index.html');
    res.sendFile(__dirname+'/front/index.html');
})

// Escucha las peticiones http en el puerto 3000 :D
app.listen(8080, function(){
    console.log('App listening on port 8080!')
});
