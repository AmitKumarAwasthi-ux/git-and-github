//1  FUNCTION DECLARATION STATEMENT : USING FUNCTION KEYWORD.....................................................

function greet(){
  console.log("Good morning")
}
greet();

/*

greet()
function greet(){
  console.log("Good morning maa")
}





//2   FUNCTION AS EXPRESSION /EXPRESSION FUNCTION...............................................................


let sum=function(a,b){
  return(a+b);
}
sum(40,70);

let res=sum(70,50)
console.log(res);

console.log(sum(80,60))



// Function as Expression




//sum(5,5)                           //function cannot be hoisted..........
var sum=function (a,b)
        {
            console.log(`Sum is :${a+b}`)
            return 'Task Completed'
        }
        sum(5,5) 


//3   IMMEDIATE INVOKE FUNCTION(IIF)........................................................................




//as a function declaration.............



(function ()
{
  let response;
  response=confirm("Do you want to share your location");
})()                                                                  //not result error in response



(function(){
  console.log("maa mujhe sb dikhai de rha h..!");
})();

/*
let response;
(function(){
  response=confirm("Do you want to share your resume")                   //not result error in response
})()




//as a function expression..........

const result=(function(){
  let resp=confirm("Do you want to share ur address")
  return resp;
})()
console.log(`Result:${result}`);



const result=(function (){    
  let resp=confirm("Do you want to share your location?")
  return resp;
})() 

console.log(`Result: ${result}`)


*/


//4  ARROW FUNCTION.............................................................................................

/*
const greet=function(name)
{
  console.log(`Good morning ${name}`);
}


const greet=(name)=>{
  console.log(`Good evening ${name})
  }
greet(Durga maa)



const greet=(name)=> console.log(`Good morning ${name}`);
 greet("Raj")



 const greet=name=> console.log(`Good morning ${name}`);
 greet("Rohan")                                  //when we use single parameters parenthesis not mentioned..




 ///sum of two numbers in Array function..

 const findSum=(a,b)=>{console.log(`sum is: ${a+b}`)};
 findSum(20,80)

//find power in Array function......

const findPower=(base,exponent)=>base**exponent;
//findpower(5.6)
const result=findPower(5,2);
console.log(result);











//1..IMPLICIT RETURN IN ARRAY FUNCTION...........


const findPower=(a,b)=>a**b;
let res=findPower(7,2)
console.log(res);

console.log(findPower(8,3));




const sum=(a,b)=>a+b;
const output=sum(90,80);
console.log(output);


const product=(a,b)=>a**b;
console.log(product(2.0,7.6));


const power=(a,b)=>a**b;
console.log(power(2,3));

const output1=power(9,7);
console.log(output1);


//2..EXPLICIT RETURN IN ARRAY FUNCTION...............

/*
const findPower=(base,expo)=>{
  const pow=base**expo;
  console.log(`${base} ** ${expo}=${pow}`);
  return pow;
}
const result=findPower(10,2)
console.log(`result: ${result}`);

console.log("Output is:",result) 



 //write a function that takes two number and print sum....


 const findSum=(a,b)=>{
  return (a+b);
 }
console.log(findSum(100,500));



const findSum=(a,b)=>{
 // let sum=0;
  sum=a+b;
  console.log(`sum is :${sum}`);
  return sum;
}

console.log(findSum(200,700))




const greet=function(a,b){
  console.log(a)
  console.log(b)
  return `Aasif`
}

// console.log(greet) ---> f(){} entire function code
//console.log(greet(5,5)) ---->retuned value                                 /////error
console.log(greet(5,10))








//5  HIGHER ORDER FUNCTION(HOF).....................................................................................

function generic (task,name,city){
  task(name,city);
  console.log("completed");
}


function generic (call,name,city){
  call(name,city);
}




//6 CALLBACK FUNCTION (CBF)........................................................................................


function generic (task,name,city){
  task(name,city);
  console.log("completed");
}
function printName(userName,city){
  console.log(`userName is : ${userName}`);
  console.log(`userCity is : ${city}`);

}
generic(printName,"Nobita","Noida");







function company(task,name,isworking){
  task(name,isworking);
  console.log("completed")
}
 company(function(name,isworking){
  console.log(`username is : ${name}`);
  console.log(`userworking is : ${isworking}}`);

 },"lekhraj",false);

*/


 //Accept multiple function.................


 




const companyInfo=(call1,call2,comName,req,salary,name,age,state,pin)=>{
  console.log(`Company Name: ${comName}`);
  console.log("=================")
  call1(req,salary)
  console.log("=================")
  call2(name,age,state,pin)

}



companyInfo(function (req,sal,){
  console.log(`Requirement ${req}`)
  console.log(`Salary ${sal}`)
 
},function (name,age,state,pin){
  console.log(`Candiate Name: ${name}`)
  console.log(`Age: ${age}`)
  console.log(`State: ${state}`)
  console.log(`Pincode: ${pin}`)
},"XYZ","SDE","10LPA","Aasif",20,"Delhi","Rohini")



//7  NESTED FUNCTION................................................................................................
/*
function outer(){
  console.log("Inside outer function");

  function inner(){
    console.log(`Inside Inner function`)
  }
  inner ();
}
outer();




function outer(){
  console.log("Inside outer function");
  function inner(){
    console.log("Inside Inner function");
  }
  return inner;
}
const output=outer();
console.log(output);

*/