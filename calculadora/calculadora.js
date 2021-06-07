// Pedir el tipo de operación y guardarlo en una variable operacion
let operacion = prompt ('¿Selecciona la operación: sumar, restar, dividir o multiplicar?');
// Pedir el primer valor y guardarlo en una variable numeroUnoString
let numeroUnoString = prompt('Introduzca el primer numero: ');
// Pedir el segundo valor y guardarlo en una variable numeroDosString
let numeroDosString = prompt('Introduzca el segundo numero: ');
// Llamar a la función calcular para iniciar la operación
calcular();

function calcular() {
    // Declarar una variable resultado donde vamos a guardar el resultado de la operación
    let resultado;
    // Convertir el valor de numeroUnoString de String a Number
    // y guardarlo en una variable llamada numeroUnoNumber
    let numeroUnoNumber = Number(numeroUnoString);
    // Convertir el valor de numeroDosString de String a Number
    // y guardarlo en una variable llamada numeroDosNumber
    let numeroDosNumber = Number(numeroDosString);
    
    // Utilizando Switch o if comprueba que operación ha introduzido el usuario y llama a la función que le corresponde a esa operación
    // ejemplo: si operacion es sumar llamar a la función sumar y pasarle como parametros numeroUnoNumber y numeroDosNumber 
    switch (operacion) {
        case 'sumar':
            resultado = sumar(numeroUnoNumber, numeroDosNumber);
            break;
        case 'restar':
            resultado = restar(numeroUnoNumber, numeroDosNumber);
            break;
        case 'dividir':
            resultado = dividir(numeroUnoNumber, numeroDosNumber);
            break;
        case 'multiplicar':
            resultado = multiplicar(numeroUnoNumber, numeroDosNumber);
            break;
        default:
            alert( 'Un valor desconocido' );
    }
    
    // Imprimir el resultado por consola o con un alert
    alert(resultado);
}

function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function dividir(a, b) {
    return a / b;
}

function multiplicar(a, b) {
    return a * b;
}
