/*

console.log(window);





var a=10;
console.log(window);




let password=3432432432;
console.log(window.password);                //undefined





console.log(window.screen)                       //w-1280,          h-672,720
console.log(window.scroll)                     //native code




var a=10;
let b=20;
const c=30;
console.log(a);
console.log(b);
console.log(c);



var a;
let b;
const c=3;
console.log(a);
console.log(b);
console.log(c);










//GEC WITH BLOCK ELEMENTS


var a=1;
let b=2;
const c=3;
{
  var a=10;
  let b=20;
  const c=30;
  var d=40;
  console.log(`Inside block ${a}`);
  console.log(`Inside block ${b}`);
  console.log(`Inside block ${c}`);
}
console.log(`outside block ${a}`);
console.log(`outside block ${b}`);
console.log(`outside block ${c}`);
console.log(`outside block ${d}`);
  



let a=5;
const b=6;
{
  let a=100;
  const b=200;
  console.log(a);
  console.log(b);
  a=50;
}
console.log(a);
console.log(b);

*/





let a="hello";
if(true){
  let a="haha";
  var b="hey";
  console.log(a);
  console.log(b);
}
console.log(a);
console.log(b);