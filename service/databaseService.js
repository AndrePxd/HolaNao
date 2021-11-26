const databaseService = () => {

    const knex = require('knex')({
        client : 'mssql',
        connection:{
            server : process.env.DB_HOST,
            user: process.env.DB_USER,
            password : process.env.DB_PASS,
            database : process.env.DB,
        }
        
    });

    //Nombre de la tabla
    const table = 'departamento';

    /*const crearDpto = ({cd, nombre, costo_envio}) =>{ //Deconstruyendo json
        return knex(table).insert({
            cd: cd,
            nombre : nombre,
            costo_envio : costo_envio,
        });//retorna una promesa
    };*/

const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.Google_Client_Id);


  async function googleVerify( token = '') {
    //  console.log(token);
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.Google_Client_Id, 
  });
const{name,email} = ticket.getPayload();
   return knex(table).insert({
      cod_admin: 1,
      nombre: name,  
      correo: email,
      user: name,
      password: 'Perle15p',
      tipo_admin: true,
   });
  
};

    const leer = () =>{
        return knex(table).select();
    };

    return {googleVerify, leer};
};
//Exportamos a toda la aplicacion
module.exports = {
    databaseService
};