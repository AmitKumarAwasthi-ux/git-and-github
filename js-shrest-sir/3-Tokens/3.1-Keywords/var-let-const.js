/*VAR KEYWORD...............................................................................................*/


/*variable declares with var goes to global scope............

var a=10;
{
  var a=100;
}
console.log(a);

//MULTIPLE TIME DECLARATION.................

var a=100;
a=120;
console.log(a);//





//MULTIPLE TIME INITIALIZATION.................................

var a=1000;
var a=2999;
console.log(a)




//WE CAN DECLARE VARIABLE WITHOUT INITIALIZATION....................

var a;
console.log(a);





///VARIABLE DECLARE WITH VAR ,CAN BE HOISTED.   NOT TDZ........................


console.log(a)

var a=100;
{
  var a=2000;
}




console.log(b)
                                          //////UNDEFINED.....................
var b=100000000;




////VARIABLE DECLARE INSIDE BLOCK ,WILL GO TO GLOBAL SCOPE....................................




var C=10000;
{
  var C=100;
}
console.log(C);

//////VARIABLE DECLARE INSIDE FUNCTION WILL NOT GO TO GLOBAL SCOPE IT WILL ACCESSIBLE INSIDE FUNCTION ONLY.......



function sum(first,second){
  var a=first;
  var b=second;
  sum=a+b//////////////////////////////////it means proove that var declare in inside function only,output=300;
  console.log(sum)
}
const res=sum(100,200);
console.log(res);                           //output=undefined;



*/

























/*LET KEYWORD...............................................................................................*/



/*variable declares with let goes to block scope............

var a=10;
let b=20;
{
  var a=100;
  let b=300;
}
console.log(a);
console.log(b)



/ONE TIME DECLARATION.................

let a=100;
a=120;
console.log(a);





//MULTIPLE TIME INITIALIZATION.................................

let a=1000;
let a=2999;
console.log(a)




//WE CAN DECLARE VARIABLE WITHOUT INITIALIZATION....................*/
/*
let a;
console.log(a);


let b=10;{
  let c=200;
  console.log(c);
}
console.log(b);



///VARIABLE DECLARE WITH let ,CANNOT BE HOISTED.   belongs TDZ........................


console.log(a)

let a=100;
{
  let a=2000;
}




console.log(b)
                                          //////UNDEFINED.....................
var b=100000000;




////VARIABLE DECLARE INSIDE BLOCK ,WILLNOT GO TO GLOBAL SCOPE., EXISTS IN SCRIPT OR BLOCK SCOPE..................




var C=10000;
{
  var C=100;
}
console.log(C);

//////VARIABLE DECLARE INSIDE FUNCTION WILL NOT GO TO GLOBAL SCOPE IT WILL ACCESSIBLE INSIDE FUNCTION ONLY.......



function sum(first,second){
  let a=first;
  let b=second;
  sum=a+b//////////////////////////////it means proove that var declare in inside function only,output=300;
  console.log(sum)
}
const res=sum(100,200);
console.log(res);                           //output=undefined;

*/





























/*CONST KEYWORD...............................................................................................*/



/*variable declares with CONST goes to block scope............*/
/*
var a=10;
let b=20;
const c=30;
{
  var a=100;
  let b=300;
  const c=400;
  console.log(a);
console.log(b);
console.log(c);
}
console.log(a);
console.log(b);
console.log(c);



//ONE TIME DECLARATION.................

const d=100;
d=120;
d=900;
console.log(d);





//ONE TIME INITIALIZATION.................................

const e=1000;
const e=2999;
console.log(e)




//WE CANNOT DECLARE VARIABLE WITHOUT INITIALIZATION....................

const a;
console.log(a);


const b=10;{
}
console.log(b);



///VARIABLE DECLARE WITH CONST ,CANNOT BE HOISTED.   belongs TDZ........................


console.log(a)

const a=100;
{
  const a=2000;
}




console.log(b)
                                          //////UNDEFINED.....................
const b=100000000;



////VARIABLE DECLARE INSIDE BLOCK ,WILLNOT GO TO GLOBAL SCOPE., EXISTS IN SCRIPT OR BLOCK SCOPE..................




var C=10000;
{
  var C=100;
  console.log(C)
}
console.log(C);*/

//////VARIABLE DECLARE INSIDE FUNCTION WILL NOT GO TO GLOBAL SCOPE IT WILL ACCESSIBLE INSIDE FUNCTION ONLY.......



function sum(first,second){
  const a=first;
  const b=second;
  sum=a+b//////////////////////////////it means proove that var declare in inside function only,output=300;
  console.log(sum)
}
const res=sum(700,200);
console.log(res);                           //output=undefined;















/*





var a=1;
let b=2;
const c=3;
{
  var a=10;
  let b=20;
  const c=30;
  console.log(a);
  console.log(b);
  console.log(c);
}
console.log(a);
console.log(b);
console.log(c);


*/



