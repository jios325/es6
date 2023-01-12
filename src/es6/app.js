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

