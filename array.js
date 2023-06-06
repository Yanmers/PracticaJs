// arreglos....>
// var compras = [];
// compras[1] = "Tomate";
// compras[3] = "Agua";


// console.log(compras[3]);

// var listaCompras = [
//     prod = "arroz",
//     precio = 23,
//     libras = 10,
//     marca = "expreso"
// ]

// console.log(listaCompras.length);

// var palabra = ['Hello', 'world!', 'stringCualquiera'];
// // return palabra[0]+ " "+ palabra[1]
// console.log(palabra[0]+" "+palabra[1]);


// var arrayOfNums = [1,2,3,4,5]
//   var suma = 0;
//   for (var i = 0; i < arrayOfNums.length; i++) {
//    suma += arrayOfNums[i]
   
// }

// console.log(suma);

// var stringMasLargo = [];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] === "string.length") {
//     return array;
//   }
  

// }

// return stringMasLargo;


// let num1 = 1234;
// let num2 = "12";

// console.log(num1 > num2);

// let num1 = "9";
// let num2 = "23"

// console.log(num1 + num2);
// console.log(Number(num1) + Number(num2));

// let numFav = 10;

// if(numFav < 20 && numFav != 3){
//     console.log("si lo es");
// }else "no lo es";

// let x = 2;
// let y = 4;
// if(x==2 && y !=6){
//     console.log(true)
// }else false;

//El operador OR || siempre retornara true cuando una de 
//las dos condiciones se cumplan, y false cuando nunguna de las condiciones se cumplan

// let numFav = 7;
// let num = 10;
// if(numFav == 0 || num == 12){
//     console.log(true);
// }else console.log(false)

//Operador no logico ! siempre es lo contrario de lo que se espera.

// let x = 3;
// let y = 5;
// if(x==3 && y !=5){
//     console.log(true);
// }else console.log(false);

// let caso1 = 14;
// ++caso1;

// console.log(caso1);


//Operador condicional ?:
// let hora = new Date();
// var saludar = "Buenos " + ((hora.getHours()> 17)? "tardes." : "dias.");
// console.log(saludar);

//TypeOf es un operador que nos devolvera siempre el tipo de valor de la variable en este caso puede ser numeros, string o booleanos
// let tipo = false;
// let repDom = "santoDomingo";
// let fecha = new Date();
// let num = 12365;
// console.log("Tipo de datos es " + typeof tipo);
// console.log("tipo de datos es " + typeof repDom);
// console.log("tipo de datos es " + typeof fecha);
// console.log("tipo de datos es "+ typeof num);

// instaneOf otro tipod e condicional, que nos dice el tipo de dato que trae nuestra variable

// let hoy = new Date();
// if(hoy instanceof Date){
//     console.log(" Es hoy " + hoy)
// }

// function Prenda(tipo, color,material){
//     this.tipo = tipo,
//     this.color = color,
//     this.material = material
// }

// let miprenda = new Prenda("pantalon", "azul","jeans");
// let miprenda1 = new Prenda("camiza", "azul","coton");
// let miprenda2 = new Prenda("zapatos", "negros","lether");
// a = miprenda  instanceof Prenda == true;
// b = miprenda  instanceof Object == true;
// console.log(b);
// console.log(miprenda);
// console.log(miprenda1);
// console.log(miprenda2);

//Usar un delete dentro de un Arreglo.

// let lugares = ["santoDomingo", "Pariz", "Italia","Acapulco", "Mexico"]
// delete lugares[1];
// console.log(lugares);


// let hora = new Date();
// let horas = hora.getDate();
// if(horas < 12){
//     console.log("am");
// }else console.log("pm");

//El operador Not ! niega el valor de la variable.

// let num = !123;
// console.log(num);

//parrseFloat y New Number metodos de conversion a numeros.

// let num = new Number(145);
// let num2 = parseFloat("8.57");
// console.log(num);
// console.log(num2);

//PaseseIn(tranforma los numeros decimales a numeros enteros.) y isnan(hacemos uso de la condicion para ambos tipos)

// let num = parseInt("34")
// console.log(num);

// let num = prompt("Inserta el numero preferido");
// num = parseInt(num)
// if (isNaN(num)) {
//     alert("no es un numero")
// }

//Metodos para redondear numeros a enteros.

// let num = 12.4;
// let num1 = 23.5;
// let num2 = 4.45;
// let num3 = "123";
// let num4 = "1234p"

// console.log(Math.floor(num1));
// console.log(Math.round(num1));
// console.log(Math.ceil(num1));
// console.log(Math.floor(num));
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num2));
// console.log(Math.round(num2));
// console.log(Math.ceil(num2));
// console.log(Math.floor(num3));
// console.log(Math.round(num3));
// console.log(Math.ceil(num3));
// console.log(Math.floor(num4));
// console.log(Math.round(num4));
// console.log(Math.ceil(num4));




// function Tointeger(x){
//     x > Number(x);
//     return x < 0 ? Math.ceil(x) : Math.floor(x);
// }

// console.log(Tointeger())



// let num = 4;
// let num1 = 2;

// function func1(){
//     console.log("cumple la condicion");
// }

// function func2(){
//     console.log("No cumple la Condicioon");
// }

// if(num * num1 >= Number.MAX_VALUE){
//     func1();
// }else{
//     func2();
// };

// if(num / num1 >= Number.MIN_VALUE){
//     func1();
// }else{
//     func2();
// };


//String transforma cualquier caracter que la variable tenga como valor en una cadena de testo.
// let caracter = String(123.44);
// let semanaDias = String(["lunes", " martes", " miercoles",])
// let booleanos = String("bool");
// console.log(semanaDias);
// console.log(caracter);
// console.log(booleanos);

//Metodo toString tranforma los numeros a binarios...

// let num = 15;

// console.log(num.toString());
// console.log(num.toString(2));
// console.log(num.toString(8));
// console.log(num.toString(16));


// let vocal = "A";
// let vocal1 = "B"
// if(vocal < vocal1){
//     console.log(true);
// }else console.log(false);


//insertar valores dentro de la misma matriz.

// let valor = [];
// valor.push();
// valor.push(`hoy tenemos`);
// valor.push(3);
// valor.push(`cerditos`);


// console.log(valor);


// Metodo .length, mide la longitud del valor que le estemos pasando este metodo.

// let nombre = "yanielMercedes";
// console.log("mi nombre tiene la longuitud de "+nombre.length +" caracteres");

//split metodo separador de caracteres.

// var diasSemana = ["lunes", "martes", "miercoles", "jueves", "viernes"];

// var diasorg = [];

// for (let i = 0; i < diasSemana.length; i++) {
//     diasSemana[i] = diasorg.push(diasSemana[i]);
//     if(diasorg.length[0]=== "lunes")
    
// }

// console.log(diasorg);


//ToLowerCase y toupperCase, tranforman los string de mayusculas a minusculas y a su iversa.

// let nom = "YANIEL MERCEDES"

// console.log(nom.toLowerCase());
// console.log(nom.toUpperCase());

// IndeOf y lasIndeOf comparador de strinng

// let nom = "yanielMercedes";

// console.log(nom.indexOf("e"));
// console.log(nom.lastIndexOf("M"));

