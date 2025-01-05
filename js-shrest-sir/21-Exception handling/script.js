/*



let a=100;
let b=20;
let c=600;

try{
  console.log("try block start");
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log("try block end");

}catch(error){
  console.log("catch block");
  console.log("error");
  console.log("err.name");
  console.log("err.message");

}finally{
  console.log("finally block start");
  console.log(a);
  console.log(b);
  console.log(c);
}
  


*/


try{
  const fullName=prompt("Enter user name");
  if(fullName===""){
    throw newError("Name is not passed by the user");

  }
  else{
    console.log("userName:" +fullName)
  }
}catch(err){
  console.log(err);
  console.log(error.message);

}