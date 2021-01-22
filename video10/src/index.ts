let person:{
    firstName: string;
    nationality: string;
} = {
    firstName:"Ronit",
    nationality: "Indian"
}


let obj:object; //SHOULD NOT BE USED
obj = {
    name: "Amit",
    1: 2
};

// person = {name:"Amit"}; //Will through ERROR


let obj1:{}; // SHOULD NOT BE USED

obj1 = {
    name: "Amit"
}



const student:{
    age:number,
    class: number
} = {
    age: 10,
    class: 4
};

//DEFINITE ASSIGNMENT
let a:string;

//a.toUpperCase();



//OPTIONAL PROPERTY
let teacher:{
    name: string,
    experience: number,
    subjects: string[],
    address?: string
}

teacher = {
    name: "RAshmi",
    experience: 10,
    subjects: ["Maths", "Physics"],

}


//INDEX SIGNATURE
let teacherr:{
    name: string,
    experience: number,
    subjects: string[],
    address?: string,
    [key:string]: any
}

teacherr = {
    name: "RAshmi",
    experience: 10,
    subjects: ["Maths", "Physics"],
    dob: "10-10-1970"
}

// teacherr.name // Privided by suggestion