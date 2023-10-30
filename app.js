// let numero1 = 3;
// let numero2 = 20;

// if (numero1>numero2) {
//     document.write("El numero: "+numero1 + ", es mayor que " + numero2)
    
// }else{
//     document.write("El numero: "+numero2 + ", es mayor que " + numero1)
// }

// Pedir la edad  del usuario decirle si es mayor de edad siempre y cuando

// let edad = prompt("Dame tu edad");

// if (edad>0) {
//     if (edad>=18) {
//         document.write("Eres mayor de edad");
//     }else {
//         document.write("Eres menor de edad");

//  }else{
//         document.write("EDAD NO VÁLIDA");
//     }
// }

// let dia = prompt("Selecciona un dia").toLowerCase();


// switch (dia) {
//     case 'lunes':
//         console.log("El dia que seleccionaste es Lunes")
//         break;
//     case 'martes':
//          console.log("El dia que seleccionaste es Martes")
//         break;
//     case 'miercoles':
//         console.log("El dia que seleccionaste es Miercoles")
//         break;
//      case 'jueves':
//         console.log("El dia que seleccionaste es Jueves")
//         break;
//     case 'viernes':
//         console.log("El dia que seleccionaste es Viernes")
//         break;
//     default:
//         console.log("Este no es un dia de la semana")
//         break;
// }

// let numero = 25;
// let numero2 = 20;

// // let valor = (numero1 > numero2) ? 'El numero1 es mayor' : 

// let numero1 = prompt("Dame un numero");
// numero1 = Number(numero1); // Convierte el valor de numero1 a un número
// let numero2 = prompt("Dame otro numero");
// numero2 = Number(numero2); // Convierte el valor de numero2 a un número

// if (numero1 == numero2) {
//     document.write("El numero "+numero1+" es igual a "+numero2);   
// } else if (numero1 > numero2) {
//     document.write("El numero "+numero1+" es mayor al "+numero2);
// } else {
//     document.write("El numero "+numero1+" es menor al "+numero2);
// }


// let modulo= prompt("Dame un numero");
// if (modulo%2 ==1)  {
//     document.write("El numero "+modulo+" es impar");
// }else {
//     document.write("El numero "+ modulo+" es par")
// }

// let entero1 = prompt("Dame un numero entero");
// let entero2 = prompt("Dame otro numero entero");
// if (entero1==0 || entero2==0) {
// document.write("Error");
// } else {
//         let division=(entero1/entero2);
//         division = Number(division);
//         document.write("La division da como resultado "+division);
//     }

alert("BIENVENIDO A ESTA CALCUALDORA, INSERTA EL PRIMER NUMERO");
let primernumero = prompt("Escribe el primer número");
primernumero = Number(primernumero);
let segundonumero = prompt("Escribe el segundo número");
segundonumero = Number(segundonumero);
let operacion = prompt("¿Qué operación quieres hacer?, Escribe solo el operador");
if (operacion=="+") {
    let suma = (primernumero + segundonumero);
    document.write("El resultado de la suma entre "+primernumero+" y "+segundonumero + " es "+suma);
} else {
    if (operacion=="-") {
        let resta = (primernumero - segundonumero);
        document.write("El resultado de la resta entre "+primernumero+" y "+segundonumero + " es "+resta);
    } else {
        if (operacion=="*"){
            let multiplicacion = (primernumero*segundonumero);
            document.write("El resultado de la multiplicación entre "+primernumero+" y "+segundonumero + " es "+multiplicacion);
        }else {
if (operacion=="/") {
    let division = (primernumero/segundonumero);
    document.write("El resultado de la división entre "+primernumero+" y "+segundonumero + " es "+division);
    
}else{
    document.write("Este no es un operador válido, usa * para multiplicación, y / para división");
}
        }
    }
} 
    

