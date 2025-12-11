var str = 'tehhsd'

console.log(str.__proto__)

function myCar (name){
    this.carname =name
}

myCar.prototype.printCarName = function(){
    console.log(`my car name is ${this.carname}`)
}
const tesla =  new myCar('Tesla');
console.log(tesla.__proto__ == myCar.prototype)//true
console.log(myCar.prototype.constructor === myCar)//true


 function animal(name) {
     this.animalName =  name;
 } 
 animal.prototype.speak = function( ){
     console.log(`${this.animalName} makes a sound`)
 }
 animal.prototype.eat = function(item) {
     console.log(`${this.animalName} eats ${item}`)
 }
 
 const dog = new animal('Dog');
 dog.eat('Chips')
 dog.speak()