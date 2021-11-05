// No cambies los nombres de las funciones.

// invocarCallback(function() { return 'Hello world!' }) --> undefined

function invocarCallback(cb) {
  // Invoca al callback `cb`
  // Tu código:
  cb();
}

// function suma(a,b) {
//   return a + b;
// }

// function rest(a,b) {
//   return a - b;
// }

// operacionMatematica(3,4,suma)
// operacionMatematica(3,4,resta)

function operacionMatematica(n1, n2, cb) {
  // Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  // Devolver lo que retorne el ejecutar el callback pasándole como argumentos los números recibidos.
  // Tu código:
  return cb(n1, n2)
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  // Tu código:
  var suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i];    
  }

  // var suma = numeros.reduce(function(acum, elem) {
  //   return acum + elem;
  // });
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre el array "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada elemento el arreglo)
  // Tu código:

  for (let i = 0; i < array.length; i++) {
    cb(array[i]);    
  }

  // array.forEach(function(elemento) {
  //   cb(elemento);
  // });

  // array.forEach(cb);
}

// [2,1,4,3,7]

//    |

// [4,1,16,9,49]

function map(array, cb) {
  // Itera sobre cada elemento de "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  // Tu código:
  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(cb(array[i]));
  }

  // var newArray = array.map(function(elemento) {
  //   return cb(elemento);
  // });
  // var newArray = array.map(cb);
  return newArray;
}

// ['agustina', 'juan', 'angel', 'florencia']

// ['agustina', 'angel']

function filter(array) {
  // Filtrar todos los elementos del array que comiencen con la letra "a".
  // Devolver un nuevo array con los elementos que cumplen la condición
  // Tu código:

  var newArray = [];
  for (let i = 0; i < array.length; i++) {
    if(array[i][0] === 'a') {
      newArray.push(array[i]);
    }
  }

  // var newArray = array.filter(function(elemento) {
  //   return elemento[0] === 'a';
  // });
  return newArray;
}

// ---- Ejercicios de Repaso ----

function deObjetoArray(objeto){
  // Escribe una función que convierta un objeto en un arreglo, donde cada elemento representa 
  // un par clave-valor.
  // Ejemplo: 
  /* objeto({
      D: 1,
      B: 2,
      C: 3
     }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  // Tu código:
  // var newArray = [];
  // for (const prop in objeto) {
  //   newArray.push([prop, objeto[prop]]);
  // }
  // return newArray;
  return Object.entries(objeto);
}

function numberOfCharacters(string) {
  // La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  // en formato par clave-valor.
  // Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  // Tu código:

  var obj = {};
  for (let i = 0; i < string.length; i++) {
    if(!obj[string[i]]) {
      obj[string[i]] = 1;
    } else {
      obj[string[i]] = obj[string[i]] + 1;
    }
  }
  return obj;
}
//                123X321
//                  i
//                    j
function capicua(numero){
  // Escribe una función, la cual recibe un número y determina si es o no capicúa.
  // La misma debe retornar: "Es capicua" si el número se lee igual de 
  // izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  // Tu código:
  var strNumero = numero.toString();
  var middle = Math.floor(strNumero.length / 2);
  for (let i = 0; i < middle; i++) {
    if(strNumero[i] !== strNumero[strNumero.length - 1 - i]) {
      return 'No es capicua';
    }
  }
  return 'Es capicua';
}

// 'Franco' --> 'Frno'

function deleteAbc(cadena){
  // Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  // y devuelva la versión modificada o la misma cadena, en caso de no contener dichas letras.
  // Tu código:
  // var strFiltrado = '';
  // for (let i = 0; i < cadena.length; i++) {
  //   if(cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c') {
  //     strFiltrado = strFiltrado + cadena[i];
  //   }
  // }
  // return strFiltrado;

  var arrayCadena = cadena.split('');
  var cadenaFiltrada = arrayCadena.filter(function(elemento) {
    return elemento !== 'a' && elemento !== 'b' && elemento !== 'c';
  })
  return cadenaFiltrada.join('');
  // ['F','r','n','o']
}

// [4,2,3]  y  [1,3,4] --> [4,3]
//  i
//                   j

function buscoInterseccion(arreglo1, arreglo2){
  // Existen dos arrays, cada uno con cierta cantidad de números. A partir de ello, escribir una función que permita 
  // retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // Aclaración: los arreglos no necesariamente tienen la misma longitud
  // Tu código:
  var intersection = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if(arreglo1[i] === arreglo2[j]) {
        intersection.push(arreglo1[i]);
      }
    }
  }
  return intersection;
}

// i = 0

//   j = 0
//   j = 1
//   j = 2
//   j = 3

// i = 1

//   j = 0

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter,
  deObjetoArray,
  numberOfCharacters,
  capicua,
  deleteAbc,
  buscoInterseccion
};
