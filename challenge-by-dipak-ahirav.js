function createUser(name, age) {
  return {
    name,
    age,
    isAdult: age > 18
  };
}

const user1 = createUser("Alice", 20);
const user2 = createUser("Bob", 18);
console.log(user1.isAdult); // true
console.log(user2.isAdult); // ??

//console.log(q,w,x)
var q
function outrr(){
  var w
  console.log(q,w,x)
  function inner(){
    var x
    console.log(q,w,x)
  }
}
outrr()