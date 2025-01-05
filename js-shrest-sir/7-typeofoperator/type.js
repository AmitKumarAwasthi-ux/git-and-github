/*

var a="hiiii";
console.log(a);
console.log(typeof(a))
console.log(typeof(typeof(a)))


let b=true;
console.log(b);
console.log(typeof(b))
console.log(typeof(typeof(b)))



const c=10n;
console.log(c);
console.log(typeof(c))
console.log(typeof(typeof(c)))



const d=100.0;
console.log(d);
console.log(typeof(d))
console.log(typeof(typeof(d)))










///////////  And (&&)  operator



console.log(4>3 && 3>2);

console.log(4&&3);
console.log(0&&1);
console.log(-1&&0);
console.log(0&&(4-4));





//or  (||) operator

*/

console.log(4>3||3>4);

console.log(4||3);             //4

console.log(0||3);              //3

console.log(3||0);                 //3

console.log(0||(4-4));             //0

console.log("hi"||" ");                    //hi

console.log("hi"&&" ");                //empty

const emailId=prompt("emailId");
const mob=prompt("Enter mob");
if(emailId&&mob)
{
  console.log("user logged in");
}