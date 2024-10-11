let num1 = 2
let num2 = 5

//funcion sin argumentos y sin retorno
function sumar() {
    let suma = num1 + num2
    document.write("desde la funcion 1 el valor de la suma es: " + suma + "<br>")
}
sumar()

//funciion con argumentos y sin retorno
function sumar2(arg_num1, arg_num2) {
    let suma = arg_num1 + arg_num2
    document.write("desde la funcion 2 el valor de la suma es: " + suma + "<br>")
}

//funcion sin argumentos y con retorno
function sumar3() {
    let suma = num1 + num2
    return suma
}

let res_suma = sumar3()
document.write("desde la funcion 3 el valor de la suma es: " + res_suma + "<br>")

//funcion con argumentos y con retorno
