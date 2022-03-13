// const adventurer = { name: 'Alice', cat: { name: 'Lucy' } };
// const ratName = adventurer?.rat?.name;

const fatherName = 'monowar';//we cannot resign value here
let season = 'rainy';
season = 'summer';//we can reassign value here

//6 basic condition --->,<,===,>=,<=,!==
//condition 
if(season){
    console.log(season);
}
else if('name' !== season){
    console.log('not similar');
}
else{
    console.log('error');
}

//declare an array 
const number = [1,2,3,4,5,6,7];
//to get length
console.log(number.length);
//to get index 
console.log(number.indexOf(2));
//to get index value
number[3];
//to change number 
number[6]=8;

//for loop
for(let i =0;i<number.length;i++){
    //console.log(number[i]);
}


//function
function multiplication (num1 ,num2){
    return num1*num2;
}
const result = multiplication(12,12);
console.log(result);

//object
const student = {
    name:'alo',
    varsityName:'DIU',
    department: 'cse'
}

// 3 ways to get value from object
const nickName = 'name';
console.log(student.name);//directly get value
console.log(student['name'])//geting by name
console.log(student[nickName]);//geting value via variable