

// let fruit = 'apple';
// fruit = 'kiwi';
// console.log(fruit);

// const animal = 'dog';
// animal = 'cat'; // TypeError: Assignment to constant variable.
// console.log(animal);


// const fruits = () => {
 
//     if (true){
//         var fruit1 = 'manzana'
//         let fruit2 = 'pera'
//         const fruit3 = 'naranja'
//     }
//     console.log(fruit1)
//     console.log(fruit2)
//     console.log(fruit3)
// }

// fruits ();
// Arrows function
// function square (num)
// {
//     return num  * num ;
// }
// const square2 = num => num * num
// console.log(square(10));
// console.log(square2(23)) ;
// let hello = 'Hello';
// let world = 'world';
// let epicPhrase = hello +' ' + world;
// console.log(epicPhrase);
// //template literals
// let epicPhrase2 = `${hello}  ${world}!`;
// console.log(epicPhrase2);
// let carlos = `esto es un cosa 
// francesa`;
// console.log(carlos);
//default params

// function newUser(name='carlos', age='36', country='MX'){
//     console.log(name,age,country);
// }
// newUser();
// newUser('juan','20','UA');

//obj arr, desustructuracion 

// 04-rest-spread

//arrays destrusturing 

// let fruits = ['banana', 'apple'] ;
// let [a,b]= fruits;
// console.log(a);
// //objets detrusturing 
// let user = {userName : 'Carlos' , age: 34};
// let {age} = user;
// console.log(userName, age);

// //spread operator
// let person = {name:'oscar', age: 28};
// let country = 'MX';
// let data ={id:1, ...person,country};
// console.log(data);

// //rest parameters

// function sum(num, ...values){
//     console.log(values)
//     console.log(num + values[0]);
//     return num  + values [0];
// } 

// sum(1,1,2,3);


/* 
function solution(json1 = {
    name: "Mr. Michi",
    food: "Pescado",
}, json2= {
    age: 12,
    color: "Blanco",
}) {
    // Tu código aquí 👈  
    return {...json1, ...json2};
}

let obj1={
    name: 'juan',
    food: 'tacos'
};

console.log(solution()) */


//05-objetcs-literals
//enahced object literals - mejoras

/* function newUser(user, age, country, uId){

    return {
        user,
        age,
        country,
        uId
    }
}

console.log(newUser('gndx', 34, 'Mx' , 1))
 */


// promesas  | promises, callbacks, async await recibe como parametro otra funcion
//06-promises.js 
/* const anotherFunction = () => {

    return new Promise((resolve, reject)=>{
        if(false){
            resolve('Hey!!');
        }else{
            reject('Whooooops!');
        }

    })
}

anotherFunction()
 .then(response => console.log(response))
 .catch(err => console.log(err)) */


 //Clases es6 -> mejora sintactica, herencia, basado en prototipos de js
 
//07-class.js
//declarando la clase
/* class user{
    //constructor inicializa elementos de la clase
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //declarar metodos
    speak(){
        return 'Hello';
    }
    //this hace referencia al elemento padre que lo contiene
    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    //getters / setters

    get uAge(){
        return this.age;
    }

    set uAge(n){
        this.age = n;
    }

};
//instancia de clases
const newUser = new user('Carlos', 36);
const herencia = new user('Santi' , 7);

console.log(newUser.greeting());
 console.log(herencia.greeting());

 console.log(newUser.uAge);
 console.log(herencia.uAge);

 console.log(newUser.uAge=37);
 console.log(herencia.uAge=8);


 */

 //08-module.js -> permite serparar archivos y hacer referencia
/*  import hello from './module.js';
 hello(); */


 //generators -> funcion especial que retorna valores depende el algoritmo

 //09-genereator.js -> recuerda el estado

/*  function* iterate(array){
    for(let value1 of array){
        yield value1;
    }
 }
 const it = iterate(['Carlos','San','Pech','Jios']);
 console.log(it.next().value);
 console.log(it.next().value);
 console.log(it.next().value);

  function* getId() {
    // Tu código aquí 👈
    while (true)
      yield (Math.random() + 1).toString(36).substring(7);
  }
  
  const gen = getId();
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value);
  console.log(gen.next().value); */

//10-set-add.js 
//objeto set , lista vacia
/* const list = new Set();
list.add('item1');
list.add('item2').add('item3');
console.log(list); 

 Para crear un array sin elementos repetidos, podemos utilizar Set y el operador de propagación de la siguiente manera:
const array = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos = [ ... new Set(array)]
console.log(sinRepetidos) // [ 1, 2, 3, 4, 5 ]
*/









//es7 operador exponencial o includes, encontrar un elemento un arrary

//00-exponentials.js

// const data = 3 ** 4; // potencias
// console.log(data);

//01-array-includes.js


// let numbers = [1,2,3,4,5,6,7,8,9];
// console.log(numbers.includes(4)); // encuentra un valor en el array y devuelve true or false

// const list= ['oscar','david' ,'ana'];
// console.log(list.includes('Oscar')); 

//es8 junio 2017 -> 00-object-entries.js es una propiedad
// const countries= { MX :  'Mexico' , CO: 'Colmbia', CL : 'Chile', PE:'Peru'};
// let arr = Object.entries(countries);
// console.log(Object.entries(countries));
// console.log(arr[1]);
//object-values.js

// const countries= { MX :  'Mexico' , CO: 'Colmbia', CL : 'Chile', PE:'Peru'};
// console.log(Object.values(countries));

//03-string-padding.js caracteristica

// let cadena ='Hello';
// console.log(cadena.padStart(7, '_'))
// console.log(cadena.padEnd(7, '_'))

//04trailing-commas.js

// const ages = [12,34,12,10,20,,,32,,23];

// console.log(ages);
// console.log(ages.length);

//05-async-functions asincronas async await


// const fnAsync= ()=>{
//     return new Promise((resolve, reject)=>{
        
//         (true)
//             ? setTimeout(()=> resolve('AsynC!!'), 2000)
//             : reject(new Error('Error!'));
//     });
// }

// const anotherFunction = async ()=>{
//     const something = await fnAsync();
//     console.log(something);
//     console.log('Hello');
// }

// console.log('Before');
// anotherFunction();
// console.log('After');

//es9 00-regex.js

// const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
// const match = regexData.exec('2018-04-20');

// console.log(match);


//01-spread.js  transformando objetos y arreglos


// const user  = { username: 'Carlos', age :36 , country: 'MX'}

// const { username, ...values } = user;
// console.log(username);
// console.log(values);


//es9 02-finally.js


// const anotherFunction = () => {

//     return new Promise((resolve, reject)=>{
//         if(false){
//             resolve('Hey!!');
//         }else{
//             reject('Whooooops!');
//         }

//     })
// }

// anotherFunction()
//  .then(response => console.log(response))
//  .catch(err => console.log(err))
//  .finally(()=>console.log('Finnaly')) // se agrego en esta version

//es9 03-async.js generators con await

// async function* anotherGenerator(){
//     yield await Promise.resolve(1);
//     yield await Promise.resolve(2);
//     yield await Promise.resolve(3);
// }

// const other = anotherGenerator();

// other.next().then(response => console.log(response.value));
// other.next().then(response => console.log(response.value));
// other.next().then(response => console.log(response.value));
// console.log('hola');

// async function arrayOfNames(array){
//     for await(let value of array){
//         console.log(value);
//     }
// }

// const names = arrayOfNames(['oscar','Carlos','Ana']);
// console.log('after');

//es10 00-flat-map.js devuelve una matriz o arreglo anidado

// const array1 =[1,23,4,34, [1,2,4,4, [1,2,34,5]]];
// console.log(array1.flat(3));

// //flatmap

// const array2 =[1,2,3,4,5];
// console.log(array2.flatMap(v => [v, v * 2]));

// //es10 01-trimstart-trimend.js trabajo con strings

// const hello ='       Hello World!     ';

// console.log(hello.trimStart());
// console.log(hello.trimEnd());

//es10 02-try-catch.js manejar el error 

// try{
// hello();
// }catch(error){
// console.log(error);
// }

// try{
//     anotherFn();
// }catch{
//     console.log('esto es un error')
// }

//es10 03-fromentries.js  El método Object.fromEntries devuelve un objeto a partir de un array donde sus elementos son las entries en forma [propiedad, valor].
// const entries = new Map([['name','carlos'],['age', 34]]);
// console.log(entries)
// console.log(Object.fromEntries(entries))


//es11 julio 2011 
//es11 00-optional-chaining.js un objeto que tiene la representacion llave => valor
// const users = {
//     Carlos: {
//         country: 'MX'
//     },
//     San: {
//         country: 'Cor'
//     }
// }

// console.log(users.Carlos.country);
// console.log(users?.Carlos1?.country); //optional chaning

// //es11 01-bigint.js
// const aBigNumber = 9839058093859038465n;
// const anotherBigNumber = BigInt(9839058093859038465);
// console.log(aBigNumber);
// console.log(anotherBigNumber);


//es11 02-nullish.js  trabajar con valores numericos 

// const anotherNumber = 12;
// const validate = anotherNumber ?? 0 ; // operador de nullish
// console.log(validate);

// es11 03-promise-allsettled.js añade una nueva forma de  trabajar con promesas - metodo

// const promise1 = new Promise((resolve, reject) => reject('Reject') );
// const promise2 = new Promise((resolve, reject) => reject('resolve') );
// const promise3 = new Promise((resolve, reject) => reject('resolve 2') );


// Promise.allSettled([promise1,promise2, promise3]) // valida que terminen las promesas
// .then(response => console.log(response))


//es11 04-globalthis.js acceder al objeto global -navegador -node - globalworker

// console.log(window); 
// console.log(global); 
// console.log(self); 
// console.log(globalThis); 

// //es11 05-matchall.js regex para generar reglas o filtros para validar cadenas

// const regex = /\b(Apple)+\b/g

// const fruit = "Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc."

// for (const match of fruit.matchAll(regex)){
//     console.log(match);
// }

// // Tranformación del iterable retornado a array
// const array = [...fruit.matchAll(regex)]
// console.log(array)

//es11 06-dynamic-import

// const button = document.getElementById('btn');

// button.addEventListener("click", async function(){
//     const module = await import('./module.js');
//     console.log(module);
//     module.hello();
// })

//es12 junio2022 
//es12 00-numeric-separators.js - lectura amiga de cifras numericas

// const value = 100_034_450_000;
// console.log(value);

// //es12 replaceall.js 
// const string = "JavaScript es un maravilloso lenguaje de programacion";
// const replacedString = string.replace("JavaScript" , "TypeScript");
// console.log(replacedString);

//es12 02-promise-any.js


// const promise1 = new Promise((resolve, reject) => reject('Reject') );
// const promise2 = new Promise((resolve, reject) => resolve('resolve 1') );
// const promise3 = new Promise((resolve, reject) => resolve('resolve 2') );

// Promise.any([promise1,promise2,promise3]) // captura la respuesta de la primer funcion que sea satisfactoria
// .then(response => console.log(response));

//es12 03-private.js metodos privados setter getter

// class user{
//     //constructor inicializa elementos de la clase
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     //declarar metodos
//     #speak(){
//         return 'Hello';
//     }
//     //this hace referencia al elemento padre que lo contiene
//     greeting(){
//         return `${this.speak()} ${this.name}`;
//     }

//     //getters / setters

//     get #uAge(){
//         return this.age;
//     }

//     set #uAge(n){
//         this.age = n;
//     }

// };

//es13 00-at.js 2022 manipulacion de objetos y array

// const array = ['one', 'two', 'three','four', 'five', 'six'];
// const obj = {};

// console.log(array[array.length -1]); // antes
// console.log(array.at(-1)); // 
//es13 01-top-level-await.js
import { products } from "./es13products.js"
console.log(products);
console.log('Hey!');