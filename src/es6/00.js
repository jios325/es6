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


// let obj1 = {
//     name: "Mr. Michi",
//     food: "Pescado"
//   };

//   let obj2 = {
//     age: 12,
//     color: "Blanco"
//   };

// return { ...obj1, ...obj2 };

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


const user  = { username: 'Carlos', age :36 , country: 'MX'}

const { username, ...values } = user;
console.log(username);
console.log(values);