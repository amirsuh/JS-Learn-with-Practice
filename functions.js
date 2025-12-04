function addition(value1,value2) {
return value1+value2;
}
let temp = addition(2,3)
console.log('function declaration', temp)
function greet(name){
    console.log('Hello '+name+' !')
    console.log(`Hello ${name} !`)
}
greet('Alice')

sayHi(); // Works!

function sayHi() {
  console.log("Hi!");
}

// Function expression 
const additionExpression = function addition(value1,value2) {
return value1+value2;
}

var addRet = additionExpression(2,3)
console.log('Function expression',addRet)
const arrAdditionExpression = (a,b) => a + b;
let arrRet = arrAdditionExpression(2,3)
console.log('Function Arrow expression',addRet)

const person = {
  name: "John",
  greet: () => {
    console.log("Hello, I'm " + this.name); // ❌ this is not person
  }
};

let per = person
per.greet()


class Persons {
  constructor(name) {
    this.name = name;
  }

  greet() {
    setTimeout(() => {
      console.log("Hello, I'm " + this.name); // works because arrow keeps "this"
    }, 500);
  }
}

let pers = new Persons('Alics')
pers.greet('Alics')

// Arrow Functions 

let abs = () =>console.log('this is arrow')
console.log(abs())

const user = (name,age)=>({
  name,
  age,
  date:Date.now()
})
let tesms = user('Amir','22')
console.log(tesms)
const printUser = ({user,details:{users}}) => console.log(`${user} city is ${users}`)

printUser({user:'amir',details:{users:'suhail'}})



const deepnest = ({user,argument:{city,state,tal},pincode}) => console.log(`${user} lives ${city}-${state}-${tal} and the pincode is ${pincode}`)

deepnest({user:'Amir',argument:{city:'sangli',state:'MH',tal:'MR'},pincode:'416416'})

const applywithchain = fxm=>fx=>fx1=>fx2=>fx3=> console.log(fxm(fx(fx1(fx2+fx3))))
const add5 = n => n + 5;
const min5 = n => n - 5
const mul5 = n => n*5
applywithchain(add5)(min5)(mul5)(3)(5)


const array = [1,2,3,4,5].map(res=>res*2).filter(n=>n>5).reduce((acc,red)=>acc+red,0)
console.log(array)

const arrwitdef = (a=0,b=0,...rest) => console.log(a+b+rest.reduce((acc,red)=>acc+red,0))
arrwitdef(1,2,3,4,5)

class counter{
    count =0
    incres = () =>{
     this.count++;
     console.log(this.count)
    }
}
const c = new counter()
//setInterval(c.incres,1000)

const fact = n => (n<=1?1:n*fact(n-1))
console.log(fact(5))

let facti = n => (n<=1?1:n*fact(n-1))
facti(5)

function facto(n){
let res=0
if(n<=1){
  return 1
} else{
  return n*fact(n-1)
} 
}
console.log(facto(5))


// Anonymous Functions

// (function () {
//   console.log("IIFE running!");
// })();

let anon = (function () {
  console.log("IIFE running!");
})();
//anon
// (function () {
//     console.log('hi hiw are I am IIFE')
// })();

//Higher-order function using anonymous function
function applyTwice(fn, value) {
  return fn(fn(value));
}

const result = applyTwice(function(x) {
  return x + 2;
}, 5);

console.log(result);

// anonymous using promise 
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });

//   document.getElementById("myButton").addEventListener("click", function() {
//   console.log("Button clicked!");
// });

// Array methods
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(n) {
  return n * 2;
});

console.log(doubled);


// Pure Functions

function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
console.log(add(2, 3));