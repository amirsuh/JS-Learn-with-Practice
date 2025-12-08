async function getUser() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    let user = await response.json();
    console.log("Fetched user:", user);
}

getUser();

let age = 23;
let showAgeArrow = function () {
    setTimeout(() => {
        console.log("Arrow (global):", this.age); 
    }, 1000);
};

showAgeArrow();


let ages = 23;
let person = {
    ages: 25,
    showAgeArrow: function () {
        setTimeout(() => {
            console.log("Arrow (person):", this.ages);
        }, 1000);
    }
};

person.showAgeArrow();


var myStr = 'sdsadsad';
var strArray = [...myStr];
console.log("String to array:", strArray);


const original = {
    name: 'Alice',
    address: {
        city: 'Delhi'
    }
};


const shallowCopy = { ...original };


shallowCopy.address.city = 'Mumbai';

console.log("Original address city after shallow copy modification:", original.address.city);



 const promise1 =  new Promise(result => setTimeout(()=> result(3)));
 const promise2 =  new Promise(result => setTimeout(()=> result(5)));
 const promise3 =  new Promise((result,reject) => setTimeout(()=> reject(8)));


const prs1 =  new Promise(result => setTimeout(()=> result(3)));
const prs2 =  new Promise((result,reject) => setTimeout(()=> reject("Error")));
const prs3 =  new Promise(result => setTimeout(()=> result(8)));



Promise.allSettled([prs1,prs2,prs3]).then((res)=>{
 console.log(res)
  
}).catch(error=>console.log(error))

 Promise.all([promise1,promise2,promise3]).then((res)=>{
  console.log(res[0])
  console.log(res[1])
  console.log(res[2])
 }).catch((error)=>{
    console.log(error)})

Promise.race([prs1,prs2,prs3]).then((res)=>{
 console.log(res)
  
}).catch(error=>console.log(error))



const p1 = new Promise(res => setTimeout(() => res('A'), 300));
const p2 = new Promise(res => setTimeout(() => res('B'), 100));
const p3 = new Promise(res => setTimeout(() => res('C'), 200));

Promise.all([p1, p2, p3]).then(values => console.log('All:', values));
Promise.race([p1, p2, p3]).then(value => console.log('Race:', value));
Promise.allSettled([p1, p2, p3]).then(results => console.log('AllSettled:', results));
