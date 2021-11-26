//const formElement = document.getElementById('google');
//formElement.addEventListener("submit", (event) =>{
   // event.preventDefault();
/*function handleCredentialResponse(response) {
    const body = { id_token: response.credential}
     //console.log('id_token',response.credential);
      fetch('http://localhost:8080/api/auth/google',{
          method: 'POST',
          headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(body)


      })
      
      .then(resp => resp.json() )
      .then (resp =>{
        console.log(resp)
      })
      .catch(console.warn) 
}*/
const formElement = document.getElementById('google');
formElement.addEventListener("submit", (event) =>{
    event.preventDefault();
    let cod_admin = 1;
    let nombre = googleUser.nombre;
    let correo = googleUser.correo;
    let user = googleUser.nombre;
    let password = 'Perle2345';
    let tipo_admin = true;
    let transaction = {cod_admin:cod_admin,nombre:nombre, correo:correo,user:user,password:password,tipo_admin:tipo_admin};
    let transactionJson = JSON.stringify(transaction);
    console.log(transactionJson);
    fetch('http://localhost:8080/api/auth/google',{
          method: 'Post',
          headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(transactionJson)

    }).then(x => console.log('hola'))
    .catch(e=> {
        console.log(e);
    });
})


//})
      