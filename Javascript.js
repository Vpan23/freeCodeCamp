// var text = "Hola mundo \n hola";
// console.log(text);
// var miCadena;
// miCadena = "Estoy aprendiendo a programar!";

// console.log(miCadena.length); 
// miCadena[1] = "a";
// console.log(miCadena); 


// let palabra = "Javascript";
// for(let i = 0; i < palabra.length; i++){
//     console.log(palabra[i]);
// }

// let cadena = "Victor es Guapo";

// console.log(cadena[cadena.length - 2]);

//Palabras en Blanco

// var miSustantivo = "perro";
// var miAdjetivo = "negro";
// var miVerbo = "corrio";
// var miAdverbio = "rapidamente";

// var palabrasEnBlanco = `El ${miAdjetivo} ${miVerbo} ${miAdverbio} despues de ser perseguido por el ${miSustantivo} `;
// console.log(palabrasEnBlanco);

// Arreglos
// var miArreglo = ["John", 24]; 
// console.log(miArreglo[0]);

// var estudiantes = ["Nora", "Gino", "Emily", "Juan"];
// console.log(estudiantes);
// var listaEstudiantes = [["Nora",87] , ["John",78]];
// console.log(listaEstudiantes[0]);

// var listaDePrecios = [["Camisa", 5.67, "S134"], ["Celular", 250, "S678"]];
// console.log(listaDePrecios);

// var numeros = [10, 15, 30, 40];
// let suma = numeros[0] + numeros[1] + numeros[2] + numeros[3];
// console.log(suma);

// var numeros = [10, 15, 30, 40];
// numeros[0] = [100, 20];
// console.log(numeros);

// var miArreglo = [[1,2,3],[4,5,6],[7,8,9]];
// /*
// Arreglo:            [[1,2,3],[1,2,3],[1,2,3]]
// Indices:                0       1       2
// Indices internos:     0 1 2   0 1 2   0 1 2
//  */
// console.log(miArreglo[0][1]);
// console.log(miArreglo[1]);
// console.log(miArreglo[2]);

//Push();
//Metodo para anadir al ultimo elemento del arreglo.
// var miCadena = ['Hillary','Juan','Victoria','Kayn'];
// miCadena.push("Victor");
// console.log(miCadena);

//Pop(); 
//Metodo para eliminar al ultimo elemento del arreglo.
// var estaciones = ['Invierno','Otono','Primavera','Verano'];
// var estacion;
// estacion = estaciones.pop();

// console.log(estaciones);
// console.log(estacion);

//Shift();
//Metodo para eliminar el primer elemento del arreglo.
// var estaciones = ['Invierno','Otono','Primavera','Verano'];
// estaciones.shift(); 
// console.log(estaciones);

//Unshift();
//Metodo para eliminar el primer elemento del arreglo.
// var estaciones = ['Otono','Primavera','Verano'];
// estaciones.unshift("Invierno"); 
// console.log(estaciones);

//problema #2
// var milistaDeCompras = [["cereal", 3],["leche", 2],["galletas", 4],["pan",5],["refresco", 7],["pollo", 7]];
// //Cereal
// console.log(`Voy a comprar ${milistaDeCompras[0][1]} unidades de ${milistaDeCompras[0][0]}.`);
// //Leche
// console.log(`Voy a comprar ${milistaDeCompras[1][1]} unidades de ${milistaDeCompras[1][0]}.`);
// //Galletas
// console.log(`Voy a comprar ${milistaDeCompras[2][1]} unidades de ${milistaDeCompras[2][0]}.`);
// //Pan
// console.log(`Voy a comprar ${milistaDeCompras[3][1]} unidades de ${milistaDeCompras[3][0]}.`);
// //Refresco
// console.log(`Voy a comprar ${milistaDeCompras[4][1]} unidades de ${milistaDeCompras[4][0]}.`);
// //Pollo
// console.log(`Voy a comprar ${milistaDeCompras[5][1]} unidades de ${milistaDeCompras[5][0]}.`);

//Funciones
// function mostrarMensaje() {
//     console.log("Hola, Mundo!");
// }
// for(let i = 0; i<5; i++){
//     mostrarMensaje();
// }

// function sumar(a, b) {
//     console.log(a + b);
// }
// sumar(10,11);

// function concatenar(a,b,c) {
//     console.log(a + " " + b + " " + c);
// }
// concatenar("Hola","estoy","aprendiendo Javascript");
// var i = 0;
// for(let i = 0;i<5;i++) {
//     console.log("Hola");

// }
// for(let i = 0 ;i<5;i++) {
//     console.log("Piola");
// }

// var miNombre = "Victoria";
// function MiNombre() {
//     var miNombre = "Victor";
//     return miNombre;
// }
// let nombre = MiNombre();
// console.log(nombre);

// function sumar(a, b) { 
//     return a + b;
// }
// console.log(sumar(10,"a"))

// function cadena(meta) {
//     return "Mi meta es aprender " + meta;
// }
// let meta = cadena("Javascript");
// console.log(meta);

// function proximoEnLaFila(array, num) {
//     let removed = array[0];
//     array.shift();
//     array.push(num);
//     return console.log(array + " [" + removed + "]");
// }
// var array = [9,2,3];
// console.log(JSON.stringify(array));
// proximoEnLaFila(array, 14);

// console.log(5>1);
// console.log(1>1);
// console.log(5 === "5");
// console.log(5 == "5");

// if(true == true) {
//     console.log("Operacion Verdadera!");
// }else {
//     console.log("Operacion Falsa!");
// }

// function clasificarValor(valor) {
//     if(valor < 5){
//         console.log("Menor que 5.");
//     } else if(valor < 10){
//         console.log("Menor que 10");
//     } else {
//         console.log("Mayor o igual a 10");
//     }
// }
// clasificarValor(2);


// function interpretarIMC(valor) {
//     if(valor < 18.5) {
//         console.log("Bajo Peso");
//     } else if (valor <= 24.9) {
//         console.log("Normal");
//     }else if (valor <= 29.9){
//         console.log("Sobre peso");
//     } else {
//         console.log("Obeso");
//     }
// }
// interpretarIMC(23);

// function puntajeDeGolf(par, golpes) {
//     if (golpes == 1) {
//         return "Hole-in-one";
//     } else if (golpes <= par - 2) {
//         return "Eagle";
//     } else if (golpes == par - 1) {
//         return "Birdie";
//     } else if (golpes == par) {
//         return "Par";
//     } else if (golpes == par + 1){
//         return "Bogey";
//     }else if (golpes == par + 2){
//         return "Double Bogey";
//     }else if (golpes >= par + 3){
//         return "Go Home";
//     }
// }
// console.log(puntajeDeGolf(2,2));

// function clasificarValor(valor) {
//     switch(valor) {
//         case 1:
//             console.log("uno");
//             break;
//         case 2:
//             console.log("dos");
//             break;
//         case 3:
//             console.log("tres");
//             break;
//         default:
//             console.log("Ninguno");
//     }
// }
// clasificarValor(4);

// function clasificarValor(valor) {
//     switch(valor) {
//         case 1:
//             console.log("uno");
//             break;
//         case 2:
//             console.log("dos");
//             break;
//         case 3:
//         case 4: 
//             console.log("tres");
//             break;
//         default:
//             console.log("Ninguno");
//     }
// }
// clasificarValor(4);

// function esMenor(a, b) {
//     return a < b;
// }
// console.log(esMenor(1,2));

// var conteo = 0;
// function contarCartas (carta) {
//     var desicion;
//     switch (carta) {
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//             conteo++;
//             break;
//         case 10:
//         case "J":
//         case "Q":
//         case "K":
//         case "A":
//             conteo--;
//             break;
//     }
//     if (conteo > 0){
//         desicion = "Apostar";
//     }else {
//         desicion = "Esperar";
//     }
//     return conteo + " " + desicion;
// }

// console.log(contarCartas(3));
// console.log(contarCartas(2));
// console.log(contarCartas(7));
// console.log(contarCartas("K"));


//Objetos.
// var miPerro = {
//     "raza": "Husky",
//     nombre: "Misa",
//     "sangre": "O+",
//     "edad": "2 year",
//     "peso": "116 lbs"
// };
// console.log(miPerro.nombre); 

// var miCuaderno = {
//     "color": "verde",
//     "categoria": 3,
//     "numero de paginas": 200,
//     "numeros de hojas": 100
// };
// console.log(miCuaderno["numero de paginas"]); 

// var resultado = {
//     nombre: "Nora124",
//     2: "Gino155",
//     3: "estef09",
//     4: "vpan23"
// };
// console.log(resultado.nombre);

// var mochila = {
//     "color": "azul",
//     "tamanho": "mediano",
//     "contenido": ["botella de agua", "cuaderno"]
// };
// console.log(mochila);
// mochila.color = "verde";
// console.log(mochila);
// mochila.contenido.push("lapiz");
// console.log(mochila);

//Objetos Anidados.
// var miReceta = {
//     "descripcion": "mi postre fav",
//     "costo": 15.6,
//     "ingredientes": {
//         "masa": {
//             "harina": "100 grs",
//             "sal": "120 grs",
//             "chocolate": "4 cucharadas",
//             "mantequilla": "200 grs"
//         },
//         "cobertura": {
//             "azucar": "120 grs",
//             "agua": "1 cucharada"
//         }
//     }
// }
// console.log(miReceta.ingredientes.masa.sal);

// var misPlantas = [
//     {
//         tipo: "flores",
//         lista: [
//             "rosas",
//             "tulipanes",
//             "dientes de leon"
//         ]
//     },
//     {
//         tipo: "flores",
//         lista: [
//             "rosas",
//             "tulipanes",
//             "dientes de leon"
//         ]
//     }
// ];
// console.log(misPlantas[0].lista[0]);

// var coleccionDeDiscos = {
//     7853: {
//         tituloDelAlbum: "Bee Gees Greatest",
//         artista: "Bee Gees",
//         canciones: [
//             "Stayin' Alive"
//         ]
//     },
//     5439: {
//         tituloDelAlbum: "ABBA Gold"
//     }
// };

// function actualizarDiscos(discos, id, propiedad, valor) {
//     if (valor === "") {
//         delete discos[id][propiedad];
//     }else if(propiedad === "canciones") {
//         discos[id][propiedad] = discos[id][propiedad] || [];
//         discos[id][propiedad].push(valor);
//     }else {
//         discos[id][propiedad] = valor;
//     }
// };
// console.log(coleccionDeDiscos[5439].canciones);
// actualizarDiscos(coleccionDeDiscos, 5439, "canciones","mama-mia");
// console.log(coleccionDeDiscos[5439].canciones);

//Ciclos While.
// var a = 0;
// while(a<3){
//     console.log("Hello World");
//     a++;
// }

//Retornar el minimo de un valor.
function retornarMinimo(x, y){
    return x < y ? x : y;
}
console.log(retornarMinimo(7,6));
console.log(retornarMinimo(4,6));
console.log(retornarMinimo(1,6));
console.log(retornarMinimo(8,6));
console.log(retornarMinimo(9,6));

// var contactos = [
//   {
//     "nombre": "Nora",
//     "apellido": "Nav",
//     "numero": "054325336",
//     "gustos": ["pizza","programacion"]
//   },
//   {
//     "nombre": "Harry",
//     "apellido": "Potter",
//     "numero": "095959146",
//     "gustos": ["hogwarts","magia"]
//   },
//   {
//     "nombre": "Sherlock",
//     "apellido": "Holmes",
//     "numero": "00484456261",
//     "gustos": ["casos interesantes","violin"]
//   }
// ];
// function buscarPerfil(nombre, propiedad){
//   for(let i = 0; i<contactos.length; i++){
//     if(nombre == contactos[i].nombre){
//       return contactos[i][propiedad] || "la propiedad no existe.";
//       }
//     }
//     return "el contacto no existe"
// }

// console.log(buscarPerfil("sherlock","numero"));

// function generarFraccionAleatoria() {
//   return Math.random(); // [0, 1)
// }
// console.log(generarFraccionAleatoria());
// console.log(generarFraccionAleatoria());
// console.log(generarFraccionAleatoria());
// console.log(generarFraccionAleatoria());

// var numeroAleatorioEntero0y19 = Math.floor(Math.random() * 20);
// console.log(numeroAleatorioEntero0y19);
// for(let i = 0; i<30; i++){
//   var numeroAleatorio = Math.random() * 100;
//   console.log(numeroAleatorio);
// }
// function generarEnteroAleatorio(limiteSuperior) {
//   return Math.floor(Math.random() * limiteSuperior);
// }
// for(let a = 0; a < 15; a++){
//   console.log(generarEnteroAleatorio(a));
// }

// function generarNumeros(inferior, superior) {
//   return Math.floor(Math.random() * (superior - inferior + 1))+ inferior ;
// }
// console.log(generarNumeros(4,5));
// console.log(generarNumeros(4,5));
// console.log(generarNumeros(4,5));
// console.log(generarNumeros(4,5));

// console.log(parseInt("0"));

// var sumar = (x) => x+3;
// console.log(sumar(2));

// const concatenar = function(arr1, arr2) {
//   return arr1.concat(arr2);
// }
// console.log(concatenar("hola ", "Como estas"));
// const concato = (var1,var2) => var1.concat(var2);
// console.log(concato("Hola ", "Mundo"));

// const incrementar = (num, valor = 1) => num + valor;
// console.log(incrementar(2,2));
