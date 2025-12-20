// Declare once, avoid redeclaration errors
const productes = [
  { id: 1, name: 'Laptop', price: 999.99, available: true },
  {
    id: 0,
    title: 'Without using typeof, how can you check if a variable is an array?',
    content: `Array.isArray(variable);
let arr = [1, 2, 3];
console.log(Array.isArray(arr));  // true`
  },
  {
    id: 0,
    title: 'What will be the output of the following code and why?',
    content: `console.log(0.1 + 0.2 === 0.3);`,
    answer: `The output will be: false ...`
  }
  // etc...
];

const container = document.getElementById('paragraph');

container.innerHTML = productes.map(product => {
  if (product.name) {
    return `<strong>${product.name}</strong> — $${product.price} (Available: ${product.available})`;
  }
  let html = `<h5>${product.title}</h5><pre>${product.content}</pre>`;
  if (product.answer) {
    html += `<p><em>${product.answer}</em></p>`;
  }
  return html;
}).join('<hr>');

// Demo logs
console.log(+true);       // 1
console.log(+"");         // 0
console.log(+null);       // 0
console.log(+undefined);  // NaN
console.log((function f() { return typeof f; })()); // "function"