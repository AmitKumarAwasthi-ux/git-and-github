//hoisting...............//undefined//10
/*console.log(a);
var a=10; 

//temporal dead zone.........

console.log(b);
let b=20;



*/







console.log("start");
let a=10;
console.log(b);                                     //undefined
{
  var b=200;                                        
}  
console.log(a);                                           //200
console.log(b);                                           //10
console.log("end");



/*







console.log("start");
let a=10;
{
  console.log(a);                                      //error no reassignment
  let a=10;
}
console.log(a);
console.log(b);
console.log("end");












console.log("start");
var b=20;
const c=30;
{
  let a=100;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);                          //error
console.log(b);
console.log("end");



/*






console.log("start");
let a=10;
var b=20;
const c=30;
{
  let a=10;
  console.log(a);
  const c=300;
  console.log(b);
  b=200;
  c=30;                                              //error const is not reassignment
  console.log(b);
}
console.log(a);
console.log(b);
console.log("end");

*/