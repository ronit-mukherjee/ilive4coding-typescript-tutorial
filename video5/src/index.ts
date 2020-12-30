//any datatype
/*let a:any=10;
var b:any;

a = 10;
a = "String";
a = true;

function test(a:any,b:any){}*/

//unknown datatype
/*
let a:any = 1;
let b:unknown = 1;
let s:string = a;

//a.trim(); //run time error
//b.trim()// editor error/compile error

function multiply(a:unknown,b:unknown ){
    if(typeof a==="number" && typeof b==="number"){
        return a*b;
    }

    return false;
}

console.log(multiply(2,2));
*/

//string datatype
/*let a:string = "Hello";
const b:string = "hi";
let c:"hi"; //Type Literal
c = "hi";*/

//boolean datatype
/*let a:boolean;
a = true;
a= false;
const b:boolean = true;
let c:true;
c = false;
console.log(c);*/


//number datatype
/*let a:number = 1;
let b:number;
b = 1;
b = 1.0
b = -5.5;
//b = "string"
const c:number = 1.0;
let d:1;
d = 1;
d = -1;
d = 1.0;*/


//bigint datatype
/*let a:bigint = 1n;
a = 2n*3n;

let b:number = 1n;
const c:bigint = 999999999999999999999999999999999999n
let d:5n;

d = 1n
*/


