// Fernando Adrián Fuentes Martínez - A01028796
// Actividad en clase: Javascript

console.log("1. función que encuentre el primer carácter de un cadena de texto que no se repite.\n");

function caracter(texto) {
    for (let i = 0; i < texto.length; i++) {
      const caracter = texto[i];
      if (texto.indexOf(caracter) === texto.lastIndexOf(caracter)) {
        return caracter;
      }
    }
    return 'No existen caracteres unicos';
  }
  
  console.log(caracter("abacddbec"));
  console.log(caracter("awdjjbfwhabnfhn"));
  console.log(caracter("bbccddffittggyyhh"));
  console.log(caracter("bbccddffiittggyyhh"));
///////////////////////////////////////////////////

console.log("\n2. Bubble Sort\n");

function bubbleSort(array) {
  let n = array.length;
  for (let i = 0; i < n; i++) {
      let ordenado = true;
      for (let j = 0; j < n - i - 1; j++) {
          if (array[j] > array[j + 1]) {
              let temp = array[j];
              array[j] = array[j + 1];
              array[j + 1] = temp;
              ordenado = false;
          }
      }
      if (ordenado) {
          break;
      }
  }
  return array;
}

let lista1 = [1, 3, 2, 4, 6, 8, 7, 4, 5, 9];
let listaOrdenada1 = bubbleSort(lista1);
console.log("Lista ordenada: ", listaOrdenada1);

let lista2 = [10, 12, 35, 22, 100, 77, 9];
let listaOrdenada2 = bubbleSort(lista2);
console.log("Lista ordenada: ", listaOrdenada2);

let lista3 = [777, 11, 22, 10, 66, 999, 1000, 34];
let listaOrdenada3 = bubbleSort(lista3);
console.log("Lista ordenada: ", listaOrdenada3);
/////////////////////////////////////////////////////

console.log("\n3.\n");

function invertir1(lista) {
  let nuevo = [];
  for (let i = lista.length - 1; i >= 0; i--) {
    nuevo.push(lista[i]);
  }
  return nuevo;
}

function invertir2(original) {
  let temp;
  for (let i = 0; i < original.length / 2; i++) {
    temp = original[i];
    original[i] = original[original.length - 1 - i];
    original[original.length - 1 - i] = temp;
  }
}

console.log(invertir1([4, 5, 6])); 
console.log(invertir1([999, 888, 777])); 
console.log(invertir1([0, 1, 2, 3, 4, 5, 6, 7, 8, 9 , 17, 18, 19, 20]));

let original1 = [4, 5, 6, 7];
invertir2(original1);
console.log(original1); 

let original2 = [9, 8, 7, 6, 5];
invertir2(original2);
console.log(original2); 

let original3 = [1, 2, 3, 4, 5, 6];
invertir2(original3);
console.log(original3); 
///////////////////////////////////////////////////////////////////////////////////

console.log("\n4.\n");

function 
Mayus (cadena) {
  let palabras = cadena.split(" ");
  let resultado = [];

  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    let letra1 = palabra.charAt(0).toUpperCase();
    let demas = palabra.slice(1).toLowerCase();
    let Pmayus = letra1 + demas;
    resultado.push(Pmayus);
  }

  return resultado.join(" ");
}

console.log(Mayus("miedo a los animales")); 
console.log(Mayus("joker2 en octubre")); 
console.log(Mayus("node f js")); 
////////////////////////////////////////////////////

console.log("\n5.\n");

function mcd(a, b) {
    while (b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

console.log(mcd(2468, 1357)); 
console.log(mcd(98765, 43210));  
console.log(mcd(123456, 654321));
///////////////////////////////////////////////////////

console.log("\n6.\n");

function Hacker(texto) {
    let hacked = texto;
    hacked = hacked.replace(/a/gi, '4');
    hacked = hacked.replace(/e/gi, '3');
    hacked = hacked.replace(/i/gi, '1');
    hacked = hacked.replace(/o/gi, '0');
    hacked = hacked.replace(/s/gi, '5');
    hacked = hacked.replace(/b/gi, '6');
    hacked = hacked.replace(/z/gi, '2');
    hacked = hacked.replace(/t/gi, '7');
    return hacked;
}

console.log(Hacker("Javascript es divertido"));
console.log(Hacker("Buenos dias, buenas tardes, buenas noches"));
console.log(Hacker("El miedo a los animales"));
//////////////////////////////////////////////////////////////////

console.log("\n7.\n");

function factoriza(n) {
    const factores = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factores.push(i);
        }
    }
    return factores;
}

console.log(factoriza(12));
console.log(factoriza(2));
console.log(factoriza(20));
//////////////////////////////////////////////////////

console.log("\n8.\n");

function quitaDuplicados(arreglo) {
    return [...new Set(arreglo)];
}

console.log(quitaDuplicados([1, 0, 1, 1, 0, 0]));
console.log(quitaDuplicados([1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 0, 0, 0, 0, 3, 3, 4]));
console.log(quitaDuplicados([22, 22, 22, 33, 33 ,33 ,777, 777 ,777]));
/////////////////////////////////////////////////////////////////////////////////////////////

console.log("\n9.\n");

function CadenaCorta(cadenas) {
    if (cadenas.length === 0) {
        return 0;
    }
    return cadenas.reduce((minLength, current) => {
        return Math.min(minLength, current.length);
    }, Infinity);
}

console.log(CadenaCorta(["h", "moon", "construcciondesoftwareytomadedecisiones"]));

console.log(CadenaCorta(["kawjhdaijwdhaiushdawbdakjwhdiauwhdaiuwdhaiwdhjakwdhjajwhdajkwdhajwdhawd", 
"kajwdhakjwdhakjwdhakjwdhkajwdhakjhwdakjhdwkajwdhajkwd", "construcciondesoftwareytomadedecisiones"]));

console.log(CadenaCorta(["hola", "hol", "ho"]));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("\n10.\n");

function esPalindromo(texto) {
    let conversion = texto.replace(/\s/g, '').toLowerCase();
    let revertido = conversion.split('').reverse().join('');
    return conversion === revertido;
}

console.log(esPalindromo("Eva usaba rimel y le miraba suave"));  
console.log(esPalindromo("7788998877"));        
console.log(esPalindromo("construcciondesoftwareytomadedecisiones")); 
/////////////////////////////////////////////////////////////////////////////

console.log("\n11.\n");

function ordenar(lista) {
    return lista.sort();
}

console.log(ordenar(["b", "c", "d", "a", "A"])); 
console.log(ordenar(["construccion", "de", "software", "y", "toma", "de", "decisiones"]));
console.log(ordenar(["fghi", "67890", "FGHI"]));  
///////////////////////////////////////////////////////////////////////////////////////////////

console.log("\n12.\n");

function MedianaYModa(numeros) {
    const numOrdenados = [...numeros].sort((a, b) => a - b);

    // mediana
    const mitad = Math.floor(numOrdenados.length / 2);
    let mediana;
    if (numOrdenados.length % 2 === 0) {
        mediana = (numOrdenados[mitad - 1] + numOrdenados[mitad]) / 2;
    } else {
        mediana = numOrdenados[mitad];
    }

    // moda
    const frecuencias = {};
    let maxFrec = 0;
    let moda = null;

    numeros.forEach(num => {
        if (!frecuencias[num]) {
            frecuencias[num] = 0;
        }
        frecuencias[num]++;
        if (frecuencias[num] > maxFrec) {
            maxFrec = frecuencias[num];
            moda = num;
        }
    });

    return { mediana, moda };
}

console.log(MedianaYModa([3, 3, 4, 5, 6, 7, 7]));  
console.log(MedianaYModa([1 ,1 ,1, 1, 1, 1, 1, 1]));  
console.log(MedianaYModa([4, 3, 2, 2, 1, 0, 0, 8, 8, 9, 9, 5, 5, 5, 5, 5]));


//////////////////////////////////////////////////////

console.log("\n13.\n");

function Frecuente(cadenas) {
    const fre = {};
    let maxFre = 0;
    let masFrecuente = null;

    cadenas.forEach(cadena => {
        if (fre[cadena]) {
            fre[cadena]++;
        } else {
            fre[cadena] = 1;
        }
        if (fre[cadena] > maxFre) {
            maxFre = fre[cadena];
            masFrecuente = cadena;
        }
    });

    return masFrecuente;
}

console.log(Frecuente(["a", "a", "a", "a", "a", "b"]));
console.log(Frecuente(["de", "de", "de", "software", "software", "construccion", "construccion", "construccion", "construccion"]));  
console.log(Frecuente(["0", "0", "1", "2"])); 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("\n14.\n");

function PotenciaDe2(num) {
    return num > 0 && (num & (num - 1)) === 0;
}

console.log(PotenciaDe2(2)); 
console.log(PotenciaDe2(64));   
console.log(PotenciaDe2(777));   
//////////////////////////////////////////////////////

console.log("\n15.\n");

function Descendente(numeros_) {
    return numeros_.slice().sort((a, b) => b - a);
}
  
console.log(Descendente([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20]));  
console.log(Descendente([0, 1, -5, -3, -2, -1, -4, 5, 4, 2 ,3,]));
console.log(Descendente([3, 4, 25, 66, 777, 88888]));
