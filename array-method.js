const products = [
    {name:'iphone', price:13000, model:'iphone13'},
    {name:'Samsung', price:1000, model:'s22'},
    {name:'lenovo', price:3000, model:'lenovo3'},
    {name:'itel', price:1450, model:'itele13'},
    {name:'symphony', price:1000, model:'symphonyH20'}
];

//it will return
const brand = products.map(p => p.name);
//console.log(brand);

//for each will not return anything
products.forEach(p => console.log(p));


//that return that is in the condition
const similar = products.filter(p => p.name.includes('i'));
console.log(similar);

//only rturn the first statement that fulfil the condition and it will not give array
const similar2 = products.find(p => p.name.includes('i'));
console.log(similar2);