
// ejemplo de como utilizar un switch..
// let fruta = "naranja";

// switch (fruta) {
//     case "naranja":
//         console.log("La docena de " + fruta +" agria es a 150 pesos.");
//         break;
//     case "pina":
//         console.log("El valor de la pina es 100 pesos");
//         break;
//     case "manzana":
//         console.log("Tenemos la unidad a 45");
//         break

//     default:
//         console.log("Lo lamento no tenemos " +fruta +".");
//     break;

// }

// console.log("Cuantas quieres?");


//Funciones, alcance de variables globales y locales.

// var ejemplo = "adios";
// function saludar(){
//     var ejemplo = "hola";
//     console.log(ejemplo);;
// }

// saludar();
// console.log(ejemplo);

// let caso1 = 20;
// function numero(){
//     let caso1 = 10;
//     console.log(caso1);
// }

// numero()
// console.log(caso1);

// function ejemplo(){
//     console.log("!Hola a todos");
// }

// let caso1 = new ejemplo();

// console.log(typeof(1 + "1"));

// function legumbre(tipo, peso, forma) {
//     this.tipo = tipo;
//     this.peso = peso;
//     this.forma = forma;

//     this.toString = function(){
//         return(this.tipo+ ", "+ this.peso+ ", " + this.forma)
//     };
// };

// var lenteja = new legumbre("blanca", 1.5, "criollas");

// var legumbre = Object.getOwnPropertyNames(lenteja);
// console.log(lenteja);

// function legumbre(tipo, peso, forma) {
//     this.tipo = tipo;
//     this.peso = peso;
//     this.forma = forma;

//     this.toString = function(){
//         return(this.tipo+ ", "+ this.peso+ ", " + this.forma)
//     };
// };

// var lenteja = new legumbre("blanca", 1.5, "criollas");

// var legumbre = Object.keys(lenteja);
// console.log(legumbre);


// let hora = new Date();
// let hora1 = hora.getDate();
// let minuto = hora.getMinutes();
// let year = hora.getFullYear();


// console.log(hora);
// console.log(hora1);
// console.log(minuto);
// console.log(year);


