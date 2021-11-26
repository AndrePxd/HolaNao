//const { databaseService } = require('../db/databaService');
//npm install google-auth-library --save


const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.Google_Client_Id);

async function googleVerify( token = '') {
  const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.Google_Client_Id,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const{name, picture, email} = ticket.getPayload();
   return{
      nombre: name, 
      img: picture, 
      correo: email
   }
}

module.exports={
    googleVerify
}