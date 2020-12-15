//Example 1 of JS issues
/*function sum(a:number, b:number) {
  return a + b;
}

var x = "1";
var y = "2";
const result = sum(parseInt(x), parsey);
//const result = sum('1','2');
console.log(result);
*/

//Example 2 of JS issues
/*function convertToUpperCase(str:string) {
  return str.toUpperCase();
}

let originalStr;
const upperCasedStr = convertToUpperCase(originalStr);
console.log(upperCasedStr);
*/
//Example 3 of JS issue
const sumOfNums = (arr:number[]) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

//const nums = ["1", "2", "3"];
//const nums = "1,2,3";
//const nums = 1;
//const nums = "[1,2,3]";
const nums = [1, 2, 3];
const res = sumOfNums(nums);
console.log(res);

//Example 4 of JS issue
/*let a = "Hello";
const b:string = "2";
 
const c = a.toFixed();

a = "Hello";
*/
//const c:number = a + parseInt(b);

