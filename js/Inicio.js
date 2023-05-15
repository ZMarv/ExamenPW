document.getElementById("valCorreo").style.display = "none";

function validarFormulario(){
    let correo = document.getElementById("txtCorreo").value;
 
    if (correo.length == 0) {
        document.getElementById("valCorreo").style.display = "inline";
        document.getElementById("txtCorreo").classList.add("is-invalid");
    }else{
        document.getElementById("valCorreo").style.display = "none";
        document.getElementById("txtCorreo").classList.remove("is-invalid");
        document.getElementById("txtCorreo").classList.add("is-valid");
    }
    let password = document.getElementById("txtPassword").value;
 
    if (password.length == 0) {
        document.getElementById("valPassword").style.display = "inline";
        document.getElementById("txtPassword").classList.add("is-invalid");
    }else{
        document.getElementById("valPassword").style.display = "none";
        document.getElementById("txtPassword").classList.remove("is-invalid");
        document.getElementById("txtPassword").classList.add("is-valid");
    }
}
document.getElementById("ocultar").style.display = "none";

function pass(){
    let input = document.getElementById("txtPassword");
    if (input.type == "password") {
        input.type = "text";
        document.getElementById("ocultar").style.display = "inline";
        document.getElementById("mostrar").style.display = "none";
    }else{
        input.type = "password";
        document.getElementById("ocultar").style.display = "none";
        document.getElementById("mostrar").style.display = "inline";
    }
    
}
function redirigir() {
    window.open('index.html', '_blank');

}
