function register_user(){
    
    let nombre = document.getElementById("name").value
    let cedula = document.getElementById("id").value    
    let telefono = document.getElementById("phone").value         
    let contrasena = document.getElementById("password").value
    let petname = document.getElementById("petname").value   
    let age = document.getElementById("age").value 

    confirm_vacio = validar_vacio(nombre, cedula, telefono, contrasena, petname, age)

    if (confirm_vacio == true) {
        alert("Registro exitoso")
    }
}

function validar_vacio(nombre, cedula, telefono, fecha, contrasena) {
    confirm_vacio = true
    if (nombre == "") {
        alert("El campo nombre es obligatorio");
    }
    if (cedula == "") {
        alert("El campo cédula es obligatorio");
    }
    if (telefono == "") {
        alert("El campo teléfono es obligatorio");
    }
    if (contrasena == "") {
        alert("El campo contrasena es obligatorio");
    }
    if (petname == "") {
        alert("El campo nomre de mascota es obligatorio");
    }
    if (age == "") {
        alert("El campo edad es obligatorio");
    }
    return confirm_vacio
}   

function validar_texto() {

}

function validar_numero() {

}

function validar_contrasena() {

}

function validar_correo() {

}