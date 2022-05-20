var id = (id) => document.getElementById(id);

var classes = (classes) => document.getElementsByClassName(classes);


var nombre = id("nombre"),
    email = id("email"),
    empresa = id("empresa"),
    web = id("web"),
    pais = id("pais"),
    mensaje = id("mensaje"),
    form = id("form"),
    errorMsg = classes("error"),
    completado = [false, false, false, false, false, false],
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

  var   expreNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/,
        expreMail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
        expreEmpresa = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]+)*$/;
        expreWeb = /^http[s]?:\/\/[\w]+([\.]+[\w]+)+$/;
        exprePais = /(.*)/;
        expreMensaje = /(.*)/;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
form.addEventListener("submit", (e) => {
    e.preventDefault();

if (completado[0] && completado[1] && completado[2] && completado[3]  && completado[4]  && completado[5] ){
    alert('Gracias por contactarnos. El mensaje se envió correctamente');
    window.location.replace('index.html');
        
}
    
  engine(nombre, 0, expreNombre , document.form.nombre.value, "Ingrese un nombre y apellido con letras.  Sin caracteres especiales. Puede tener acentos y espacios.");
  engine(email, 1, expreMail, document.form.email.value,"Ingrese un mail válido");
  engine(empresa, 2, expreEmpresa, document.form.empresa.value,"Ingrese un nombre de Empresa sin caracteres especiales ni números");
  engine(web, 3, expreWeb, document.form.web.value,"Ingrese una página web que comience con http[s]://www.");
  engine(pais, 4,exprePais , document.form.pais.value,"Selecciones una opción válida");
  engine(mensaje, 5,expreMensaje , document.form.mensaje.value,"Ingrese un mensaje.  Mínimo 50 caracteres.  Máximo 300.");


});

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var engine = (id, serial, patron, campo,  message) => {

// analisis de campos input

    if (!patron.test(campo)) {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
        completado[serial]= false;

        // icons
        failureIcon[serial].style.opacity = "1";  
        successIcon[serial].style.opacity = "0";

    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";
        completado[serial]= true;

        // icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";

    };

    // analisis de pais (select)       
        
    if (serial == 4){
        if (document.form.pais.selectedIndex == 0) {
            errorMsg[serial].innerHTML = message;
            id.style.border = "2px solid red";
            completado[serial]= false;
        
            // icons
            failureIcon[serial].style.opacity = "1";  
            successIcon[serial].style.opacity = "0";
            
        } else {
            errorMsg[serial].innerHTML = "";
            id.style.border = "2px solid green";
            completado[serial]= true;
        
            // icons
            failureIcon[serial].style.opacity = "0";
            successIcon[serial].style.opacity = "1";
            
        };

        // analisis del mensaje (textarea)
        
    } else {
        if (serial == 5){
            if (document.form.mensaje.value == "") {
                errorMsg[serial].innerHTML = message;
                id.style.border = "2px solid red";
                completado[serial]= false;
            
                // icons
                failureIcon[serial].style.opacity = "1";  
                successIcon[serial].style.opacity = "0";
                
            } else {
                errorMsg[serial].innerHTML = "";
                id.style.border = "2px solid green";
                completado[serial]= true;
            
                // icons
                failureIcon[serial].style.opacity = "0";
                successIcon[serial].style.opacity = "1";
                
            };

        };
    };
        

};

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  




  

