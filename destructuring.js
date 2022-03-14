const array = [12,13];
const [x,y] = array;
console.log(x,y);
//we can also destructure function
function boxify (num1,num2){
    return [num1,num2];
}

const [first,second] = boxify(23,24);
//console.log(first,second);

//this main order
const student = {
    varsityName : 'diu',
    department : 'cse',
    age:25,
    array : [12,13]
}

const [first1,second2] = student.array;


//in object destructuring it doesn't maintain order
const student2 = {
    varsityName : 'diu',
    department : 'cse',
    age:25,
    personalInfo:{
        name:'alo',
        phone:012,
        lived : 'dhaka'
    }
}

const {varsityName,age} =  student2;
const {name,lived} =  student2?.personalInfo;
console.log(name);
console.log(varsityName,age);