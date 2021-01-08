//ARRAY
let a = [1,2,3];

let b:string[]=[];
b.push("hello");
//b[1]= true;

let students:string[] = ["Ravi", "Dev", "Amit"];

let c = [1.0, true, "string"];

for(let v of students){
    console.log(v.toUpperCase());
}


//TUPLES
let person:[string,string,number?] = ["Ronit","Mukherjee",1.0];
//person[2] = 1.0;
person.push(1.0);
person.push("string");
//person[4] = "hello";

let man:[number,boolean,...string[]] = [30, true, "Ronit","Amit","Ajay" ]

console.log(man);

if(person[2]){
person[2].toFixed();
}


//READ-ONLY ARRAY and TUPLE
let d: readonly number[] = [1,2,3];
let e: readonly [string,string,number] = ["Ronit","Mukherjee",20];


//ENUM
// const ADMIN = "Admin";
// const PRINCIPAL = "Principal";

enum Role {
    ADMIN="Admin",
    PRINCIPAL = "Principal",
    DIRECTOR = "Director",
}

enum Role {
    SUPERVISOR = "Supervisor"
}

console.log(Role.ADMIN, Role.PRINCIPAL, Role["ADMIN"])

let teacher = {
    name: "Ronit",
    roles: [Role.ADMIN, Role.PRINCIPAL]
}

if(teacher.roles.includes(Role.PRINCIPAL)){
    console.log("Teacher is a principal also");
}
