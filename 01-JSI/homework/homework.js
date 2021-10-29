// En estas primeras 6 preguntas, reemplaza `null` por la respuesta correcta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'Franco';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 3;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando se te pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  return x - y;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  if(x === y) {
    return true;
  } else {
    return false;
  }
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  if(str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  // if(num < 90) {
  //   return true;
  // } else {
  //   return false;
  // }
  return num < 90;
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  if(num % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // Ojo: No es raiz cuadrada!
  // Tu código:
  return num * num;
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  // return num ** exponent;
  return Math.pow(num, exponent);
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  if(numero > 0) {
    return 'Es positivo'
  } else if(numero < 0) {
    return 'Es negativo';
  } else {
    return false;
  }
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  return nombre + ' ' + apellido;
}

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  // Tu código:
  // return lado + lado + lado + lado;
  return 4 * lado;
}

function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  // Tu código:
  return euro * 1.2;
}


//                  'a'
function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Tu código:
  if(letra.length > 1) {
    return 'Dato incorrecto';
  }

  if(letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return 'Es vocal';
  }

  // return "Holaaaa ni idea que estoy haciendo aca";
}

// esVocal('p') // undefind
// esVocal('a') // Es vocal
// esVocal('asdasd') // Dato incorrecto

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  // if(x > y) {
  //   return x;
  // } else {
  //   return y;
  // }
  return Math.max(x,y);
}

/*
Para implementar la siguiente función vamos a utilizar una estructura de control de flujo nueva, 
llamada switch, si no estás familiarizado con esta estructura, es un buen escenario para hacerle 
una visita al mejor amigo del programador, INTERNET! 
En la carrera del desarrollador constantemente es necesario recurrir a los recursos que nos 
proporciona la web (Google, YouTube, MDN, Stack Overflow, y muchos más) en búsqueda de las 
herramientas necesarias para resolver los distintos problemas que nos enfrentamos, por lo que 
aprender a realizar estas búsquedas en internet es uno de los skill más importantes que puedes 
adquirir!
En tu buscador basta con simplemente escribir "switch Javascript" y listo. Éxitos!
*/
function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  // Tu código:
  switch (color) {
    case 'blue':
      return 'This is blue';
    case 'red':
      return 'This is red';
    case 'green':
      return 'This is green';
    case 'orange':
      return 'This is orange';
    default:
      return 'Color not found';
  }

  // var msj;
  // switch (color) {
  //   case 'blue':
  //     msj = 'This is blue';
  //   case 'red':
  //     msj = 'This is red';
  //     break;
  //   case 'green':
  //     msj = 'This is grenn';
  //   case 'orange':
  //     msj = 'This is orange';
  //   default:
  //     msj = 'Color not found';
  // }
  // return msj;
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  // if(numero === 10 || numero === 5) {
  //   return true;
  // } else {
  //   return false;
  // }
  return (numero === 10 || numero === 5);
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  // if(numero < 50 && numero > 20) {
  //   return true;
  // } else {
  //   return false;
  // }
  if(numero < 50 && numero > 20) {
    return true;
  } 
  return false;
}

// 7 / 2 = 3.5 | 7 % 2 = 1
// 7 / 3 = ... | 7 % 3 = 1
// 7 / 4 = ... | 7 % 4 = 3
// 7 / 5 = ... | 7 % 5 = 2
// 7 / 6 = ... | 7 % 6 = 1

// 6 / 2 = 3 | 6 % 2 = 0


function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  // Tu código:

  if(numero === 0 || numero === 1) {
    return false;
  }

  for (let i = 2; i < numero; i++) {
    if(numero % i === 0) {
      return false;
    }
  }

  return true;
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Pueden usar un while o un bucle do ... while (Investigarlo si quieren hacerlo de la segunda forma)
  // Tu código:

  // var i = 0;
  // while(i < 8) {
  //   numero = numero + 5; 
  //   i++;
  // }
  // return numero;

  var i = 0;
  do {
    numero = numero + 5; 
    i++;
  } while (i < 8);
  return numero;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  resta,
  esImpar,
  elevarAlCuadrado,
  elevar,
  esPositivo,
  combinarNombres,
  retornarPerimetro,
  deEuroAdolar,
  esVocal,
  obtenerMayor,
  colors,
  esDiezOCinco,
  estaEnRango,
  esPrimo,
  doWhile
};
