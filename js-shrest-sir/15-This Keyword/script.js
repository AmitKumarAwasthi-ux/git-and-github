/*THIS KEYWORD INSIDE A FUNCTION................................................................................*/
/*

function msg(){
  console.log(this )
}
msg()                ////////window object return with msg() function..........


*/






/*THIS KEYWORD INSIDE A FUNCTION IN OBJECT.................................................................*/


const obj={
  name:"Dingi",
  age:20,
  getDetails:function msg(){
    console.log(this);
    console.log(this.name + "and" + this.age)
  }
  
}



/*THIS KEYWORD INSIDE NESTED FUNCTION................................................................*/


