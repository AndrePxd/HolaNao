
module.exports = function(app, databaseService){
const { response, json } = require('express');
const { Router } = require('express');
const { check } = require('express-validator');




//const { googleSingIn} = require('../controllers/auth');

const googleSingIn = async(req,res=response)=>{
    const { id_token }= req.body;

    try {
        const googleUser = await googleVerify( id_token );
        console.log(googleUser);
        res.json({
            msg: 'Todo de puta madre',
           id_token
        })

    } catch (error) {
        json.status(400).json({
            ok: false,
            msg: 'El token no se pudo verificar'
        })   
    }
}
const router = Router();



router.post('/google',[
    check('id_token', 'El token es obligatorio').not().isEmpty(),
],googleSingIn );



app.post('/api/auth/google', (request, response=response) =>{
    const dato = request.body; //request.body -> la info que viene 
    console.log(dato);
    
    databaseService.googleVerify(dato)
        .then(()=>{
            response.json({"mensaje":"dato ingresado!"});
            console.log('dato ingresado!');
        }).catch(e =>{
            response.status(500).json(e);
            console.log(e);
        });
        
});


};






//module.exports = router;

