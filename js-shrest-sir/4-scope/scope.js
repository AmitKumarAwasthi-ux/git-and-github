/*

var a=1;
let b=2;
const c=3;
{
var a=10;
let b=20;
const c=30;
}
console.log(a);
console.log(b);
console.log(c);





let a=1;
{
  let a="Ram";                         //block scope
  console.log(a);
}
console.log(a);

*/


var a=1;
let b=2;
const c=3;
{
  var a=10;
  let b=20;
  const c=30;
  console.log("inside block",a);
  console.log(`inside block ${b}`);
  console.log(`inside block ${c}`);
}
console.log(`outside block ${a}`);
console.log(`outside block ${b}`);
console.log(`outside block ${c}`);



