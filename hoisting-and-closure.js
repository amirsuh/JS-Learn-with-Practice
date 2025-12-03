console.log("Index.js loaded",temp,themeBtn,iconSun,sayHello);

 var iconSun = document.getElementById('iconSun');
 var themeBtn = document.getElementById('themeBtn');

//  console.log("Index.js loaded",themeBtn);
var temp = hoistingExample();
// var returned  = temp()
console.log(temp());
function hoistingExample() {
    return greet; // Works due to hoisting
}

function greet() {
    return "Hello, World!";
}

var sayHello = function() {
    console.log("Hello!");
};
var a;        // declared but undefined
console.log(a);
a = 10; 

// console.log(aa);  // ❌ ReferenceError
let aa = 10;


function hoistingExamples() { return greets; } // ❌ ReferenceError
function greets() { console.log("2nd Hello!"); }

var temps;

temps = hoistingExample(),hoistingExamples();
console.log(temps());

function ad() {
    console.log("from a");
    return "A";
}

function bd() {
    console.log("from b");
    return "B";
}

var x 
x= ad(),bd();
let result = ad();

console.log("Result:", result);
console.log(x);

console.log((1+2, 5+5));
//let x = (console.log("running code"), 100);

console.log(x);
// let functions = [c, d];
// console.log(functions[0]()); // runs a()
// console.log(functions[1]());
function af() { return "A"; }
function bf() { return "B"; }

let combined = af() + bf();
console.log(combined);
let results = [af(), bf()];
console.log(results);


function test() {
    var a;
let blet;  // exists but in temporal dead zone
console.log(a);
console.log(blet); // error
a = 10;

    console.log(a,blet);  // undefined (var is hoisted)
    var a = 10;
    let b = 20;
    console.log(b);  // ❌ ReferenceError (let not hoisted for use)

    const c = 30;
}

test();


class Person {}
const p = new Person(); // ReferenceError

console.log(typeof Person); // 'function'

class Persons {}

const ps = new Persons();

function test() {
    return (console.log("hi"), 123);
}

console.log(test());

let xq = ( 50);
console.log(xq);

const obj={
    a:function(){
         console.log("inside a");
        return this;
    },
    b:function(){
         console.log("inside b");
        return this;
    }   ,
    c:function(){
        console.log("inside c");
        return this;
    }
}

obj.c().b().a();

hello(); // works

async function hello() {
    console.log("Hello async");
}
tets()

async function tets() {
   await hello();  // ❌ SyntaxError
}

async function av() {
  console.log("A async");
  return 1;
}

async function bv() {
  console.log("B async");
  return 2;
}

let xf = [av(), bv()];

console.log(xf);

foo(); // works
bar; // error

function foo() {
  console.log("foo");
}

var bar = function() {
  console.log("bar");
};

var x = 10;

function test() {
    console.log(x); // undefined
    //var x = 20;
}

test();

function test2() {
    console.log(a)
    //console.log(b)
    let b = 30;
    var a = 20;
}
test2();


function outer() {
    console.log(a); // undefined (var is hoisted)
    var a = 10;

    function inner() {
        console.log(a); // 10
    }
    return inner;
}

const fn = outer();
fn();

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

const arr = [];
for (let i = 0; i < 3; i++) {
  arr.push(() => console.log(i));
}
arr[0](); // 3
arr[1]();
arr[2]();

async function fetchData() {
    console.log("Fetching data...");
    return "Data";
}

async function asynectest(){
    console.log(a)
    var a = 10;

    await new Promise(res => res());
    console.log(a);
}



asynectest();