//named function
function sum(a:number, b:number):number{
  return a+b;
}

//Function Expression
const s = function(a:number, b:number):number{
  return a+b;
}

//Arrow function expression
const s1 = (a:number,b:number)=>{return a +b}

//Arrow function shorthand
const s2 = (a:number,b:number)=> a +b;

sum(5,10);


//OPTIONAL PARAMETER
function test(a:number, b?:number){
  if(b)
  return a + b;

  return a+a;
}

test(10,20);
test(10);


//REST Parameters
function sumOfAll(...args:number[]){
  for(let a of args){
  }
}

function test1(msg:string, ...b:number[]){
  console.log(msg, sumOfAll(...b))
}

sumOfAll(1,2,3,4);



//DEFAULT PARAMETER VALUE
function test2(a:number, b="Hello"){
  return `${b} ${a}`;
}

test2(10,"Hi") // Hi 10
test2(100) // Hello 100


//CALL, APPLY, BIND
test2.call(null,10,"World"); //World 10
sumOfAll.apply(null, [10,20,30]);// 60
s2.bind(null)(10,20);


//this

let obj = {
  func: function(){
    return this;
  }
}

console.log(obj.func())// obj

obj.func.call({})


function formattedDate(this:Date,a:number){
  return a+this.getDate() + this.getMonth();
}

const dt = new Date();
formattedDate.call(dt, 10);
const fd = formattedDate.bind(dt);
fd(10);


//INVOKATION
type CFuc = (input1:number,input2:number)=>number
function main(cb:CFuc,a:number,b:number){
  cb(a,b);
}

function add(a:number,b:number):number{
  return a +b
}

const mul = (a:number,b:number):number=>a*b;

main(add,10,29)

