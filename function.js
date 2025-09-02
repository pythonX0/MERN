//1. function declaration
function greetStudent(name){
    return`Hello, ${name}!`;
}
console.log(greetStudent("Alice"));
console.log(greetStudent("Bob"));
const calculationAge=function(year){
    return 2025-year;
}
console.log(`I am ${calculationAge(1990)} years old.` );

const isadult=(age)=>age>=18;     
console.log(`ທ.​ສຸກເປັນ ${isadult(calculationAge(2005))? "ຜູ້ໃຫຍ່":"ເດັກນ້ອຍ"}ແລ້ວ`);

const getGrade=(score)=>{
    if(score>=90) return 'A';
    else if(score>=80) return 'B';
    else if(score>=70) return 'C';
    else if(score>=60) return 'D';
    else return 'F';    
}
console.log(`Your grade is ${getGrade(40)}`);

const myProfile={
    name:"John Doe",
    age:30,
    isStudent: true,
    greet: function(){
        return `Hello, my name is ${this.name}.`;
    }   
};
console.log(myProfile.greet());
console.log(`I am ${myProfile.age} years old.`);
console.log(`Am I a student? ${myProfile.isStudent ? "Yes" : "No"}`);






