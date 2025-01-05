/*CALL STATEMENT WITHOUT PASS ANY ARGUMENTS OR PARAMETERS....................................................*/
/*
let human1={
  name:"Amit",
  age:"33",
}
let human2={
  name:"dinga",
  age:16,
}
let human3={
  name:"fuchesia",
  age:45,
}


function detailsAll(){
  console.log("Name =" + this.name);
  console.log("Age =" + this.age);
 /* console.log("value of a:" + a);
  console.log("value of b:" + b);
  console.log("value of c:" + c);

}
detailsAll.call(human1);
detailsAll.call(human2);
detailsAll.call(human3);


*/







/*CALL STATEMENT WITH, PASS ANY ARGUMENTS OR PARAMETERS....................................................*/
/*
let human1={
  name:"Amit",
  age:"33",
}
let human2={
  name:"dinga",
  age:16,
}
let human3={
  name:"dinga",
  age:45,
}


function detailsAll(a,b,c){
  console.log("Name =" + this.name);
  console.log("Age =" + this.age);
  console.log("value of a:" + a);
  console.log("value of b:" + b);
  console.log("value of c:" + c);

}
detailsAll.call(human1,10,20,30);

*/


/*
const obj={
  name:"chombu",
  age:"52"
}
function getDetails(city,pin){
 /* console.log(this);
  console.log(`userName: ${this.name}`);
  console.log(`Age: ${this.age}`);
  console.log(`city: ${city}`);
  console.log(`pin: ${pin}`);

}
/*getDetails.call(obj,"Noida",201301);
let res=getDetails.call(obj,"Noida",201301);*/
/*
console.log(res)*/





/*MULTIPLE  NESTED OBJECT OR ARRAY IN CALL STATEMENT.....................................................




////OBJECT........................................................


const big={

         obj1:{
         name:"Amitawasthi",
         age:45
       },

       obj2:{
        name:"Dinga",
        age:24
      }
}

function details(){
  console.log(this);
  const{obj1,obj2}=this;
  console.log(obj1);
  console.log(obj2);
}
details.call(big);







*/












/*APPLY STATEMENT WITH, PASS ANY ARGUMENTS OR PARAMETERS....................................................*/

/*

const obj={
  name:"chombu",
  age:"52"
}
function getDetails(city,pin){
  console.log(this);
  console.log(`userName: ${this.name}`);
  console.log(`Age: ${this.age}`);
  console.log(`city: ${city}`);
  console.log(`pin: ${pin}`);

}
getDetails.apply(obj,["Noida up",201301]);
let res=getDetails.call(obj,"Noida",201301);*/
/*
console.log(res)*/




/*BIND STATEMENT WITH, PASS ANY ARGUMENTS OR PARAMETERS....................................................*/


const obj={
  name:"chombu",
  age:"52"
}
function getDetails(city,pin){
  console.log(this);
  console.log(`userName: ${this.name}`);
  console.log(`Age: ${this.age}`);
  console.log(`city: ${city}`);
  console.log(`pin: ${pin}`);

}
const res=getDetails.bind(obj,"Noida Delhi",201301);
res()
console.log(res)