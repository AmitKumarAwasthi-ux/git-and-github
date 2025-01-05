/*REST PARAMETER...............................................................................................*/
/*

function details(a,b,...z){
   console.log(a);
}

//console.log(b);

console.log(z[0]);
console.log(z[1]);
console.log(z[2]);
console.log(z[3]);
console.log(z[4]);

details(100,200,300,400,500,600,700);



*/









/*REST PARAMETER USECASE WITH A FUNCTION.......................................................................*/


/*
function cart(a){
  console.log(a)
}
cart("maggi","Ice-cream","chocolate","momo","cake","perfume")



function cart(a,b,...c){
  console.log(a)
  console.log(b)
  console.log(c)

}
cart("maggi","Ice-cream","chocolate","momo","cake","perfume")


*/





/*REST PARAMETER USECASE WITH AN ARRAY.......................................................................*/

/*
const movies=["php","welcome","Dhol","Dhamal","housefull2"]

//DESTRUCTURING........
const [a,b,...c]=movies

console.log(a)
console.log(b)
console.log(c)


*/
/*REST PARAMETER USECASE WITH AN OBJECT......................................................................*/


const obj={
  name:"chombu",
  age:34,
  isworking:true,
  sal:"35k",
  state:"up",
  city:"Noida",

}
//const {name,age,isworking,sal,state,city}=obj


const {name, age,...k}=obj
console.log(name);
console.log(age);
console.log(k);



const {...value}=obj
console.log(value);
















/* SPREAD OPERATOR ...............................................................................................*/






/* SPREAD OPERATOR INSIDE A FUNCTION.......................................................................*/

const items=["perfume","shirt","ice-cream","cake"];
function details(i,i2,i3){
  console.log(i)
  console.log(i2)
  console.log(i3)

}

details(...items);
/* SPREAD OPERATOR USECASE INSIDE AN ARRAY......................................................................*/

const arr1=[100,200]
const arr2=[300,400]

const arr3=[...arr1,...arr2];
console.log(arr3);

/* SPREAD OPERATOR USECASE INSIDE AN OBJECT......................................................................*/

const obj1={
  name:"chombu",
  age:36
}

const obj2={
  city:"Noida",
  pin:201301
}
const user={...obj1,...obj2}
console.log(user);