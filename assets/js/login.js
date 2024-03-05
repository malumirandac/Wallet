//controlo qué hace el formulario cuando se haga submit
$("#formulario-datos").submit((event)=>{
    event.preventDefault(); 
    //controla que el form no se vaya automáticamente
   obtenerDatosFormulariosYValidar();
})

function obtenerDatosFormulariosYValidar(){
    const mailIngresado = $("#inputMail").val();
    const contrasenaIngresado = $("#inputContrasena").val();
    funcionValidadora(mailIngresado, contrasenaIngresado);
}

const funcionValidadora = (mail, contra)=>{
    const mailValido = "mail@mail.com";
    const contrasenaValido = "clave";
    if(mail === mailValido && contra === contrasenaValido){
        console.log("ingreso exitoso");
    }else{
        console.log("ingreso malo");
    }
}

