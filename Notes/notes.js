// Seleccion de datos (filas, columnas)
let names = [["Juan", "25", "ingeniero"], ["Efren", "30", "Diseñador"], ["Cristian", "22", "Médico"] , ["Jonier", "30", "piloto"]]
alert("El nombre es:" + names[3][0] + "y la profesión es:" + names[3][2])


// Imprimir todos los nombres en un archivo
function register_user(){
    let names = ["Juan", "Efren", "Cristian", "Jonier"]
    for (let i=0; i<names.length; i++) {
        document.write(names[i] + "<br>")
    }
}

// Imprimir nombres ordenadamente
function register_user(){
    let personas = [["Juan", "25", "ingeniero"], ["Efren", "30", "Diseñador"], ["Cristian", "22", "Médico"] , ["Jonier", "30", "piloto"]]
    for (let i=0; i<4; i++) {
        for (let j=0; j<3; j++) {
            document.write(personas[i][j] + " ")
        }
        document.write("<br>")
    }
}

//vectores//
let my_vector = [4, 8, 15]

for (let i = 0; i < my_vector.length; i++) {
    document.write("El número" + i + "es" + my_vector[i] + "<br>")
}   

//vectores//
let nombres = ["Juan", "Efren", "Cristian", "Jonier", "Patricia"]

for (let i = 0; i < nombres.length; i++) {
    document.write(nombres[i] + "<br>")
}