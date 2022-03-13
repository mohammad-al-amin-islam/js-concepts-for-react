const number = [1,2,3,4,6];//array is reference type 


const student = {
    name: 'alo',
    varsityName: 'DIU',
    department: 'cse'
}

const name = `my name is ${student.name}`;//used template string
console.log(name);

//single line arrow fuction without parameter
const getAnyNumber = () => 55

//arrow function with one parameter
const addNumber12 = add => add + 12;

//get even number
const evenNumber = x => x % 2 === 0

//multiple parameter arrow function
const addThreeNumber = (x, y, z) => x + y + z;

//multiline arrow function
const doCalculation = (num1, num2) => {
    return num1 * num2;//it will not return by himself have to return it
}

const newNumber = [...number];
number.push(9);//it will effect now
//we can add number also with this
const addedNumber = [12,...number,14]
console.log(addedNumber);