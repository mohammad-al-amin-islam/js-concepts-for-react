//json
const student = {
    varsityName : 'diu',
    department : 'cse',
    age:25,
    array : [12,13]
};

const studentOBJ = JSON.stringify(student);
//console.log(studentOBJ);
const normalStudentOBJ = JSON.parse(studentOBJ);
//console.log(normalStudentOBJ);

//fetch 
/* fetch('url')
.then(res => res.json())
.then(p =>console.log(p)); */

///keys values
const key = Object.keys(student);
const value = Object.values(student);
console.log(key);
console.log(value);


//we use for of  to array
//we use for in  to object


//add or remove to an array
const products = [
    {name:'iphone', price:13000, model:'iphone13'},
    {name:'Samsung', price:1000, model:'s22'},
    {name:'lenovo', price:3000, model:'lenovo3'},
    {name:'itel', price:1450, model:'itele13'},
    {name:'symphony', price:1000, model:'symphonyH20'}
];
const newProduct = {name:'walton', price:5000, model:'walton'};
const newProducts = [...products,newProduct];
//console.log(newProducts);


//for remove from array
const afterRemoveProduct = products.filter(p=> p.name !=='lenovo');
console.log(afterRemoveProduct);