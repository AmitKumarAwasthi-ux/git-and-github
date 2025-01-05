/*OBJECT DESTRUCTURING.....................................................................................*/
/*
const obj={
  name:"tinku",
  age:23,
}

const {name,age}=obj;

console.log(name);         //tinku  DESTRUCTURING
console.log(age);        //23      DESTRUCTURING

console.log(obj);    //return object  { name: 'tinku', age: 23 }


const {name}=obj
console.log(name)



const {age}=obj
console.log(age)







//2 example...................................................................

let obj={
  name:"chombi",
  age:16,
}
let {name,age,country}=obj;
console.log(name);
console.log(age);
console.log(country);




DESTRUCTURING OBJECT IN FUNCTION PARAMETER............................................................


function details({name,age}){
  console.log(name)
  console.log(age)

}
let obj={
  name:"chombi",
  age:16,
}
details(obj)

















/*ARRAY  DESTRUCTURING.....................................................................................*/

/*
const movies=["php","welcome","Golmal"]
const [a,,c]=movies
console.log(a);
console.log(c)




let arr=[10,20,30,40,50]
let [a,b,c,d,e,f]=arr;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);


DESTRUCTURING ARRAY IN FUNCTION PARAMETER............................................................*/


function details([a,b,c,d,e]){
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
  console.log(e)
}
let arr=[100,200,300,400,500];
  details(arr)






































/*NESTED  DESTRUCTURING.....................................................................................


const users={
  name:["Amit","vikash","ravi","sohan","sila"],
  salary:{
    sal1:"1lpa",
    sal2:"2lpa",
    sal3:"3lpa",
    sal4:"4lpa",
    sal5:"5lpa",

  }
}


const {name,salary}=users
console.log(users)
;
console.log(name);
console.log(name[2]);

console.log(salary);
console.log(salary.sal2);
console.log(salary["sal3"]);













shortcut.................................................
const {name:[u1,,,,u5],salary:{sal1,sal5}}=users
console.log(sal1)
console.log(sal5)

console.log(u1)
console.log(u5)

*/