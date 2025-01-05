///LEXICAL SCOPE./SCOPE CHAIN...................................


let user="Ravi";
function printmsg(){
 // let user="Rohan";
  console.log(`Good morning ${user}`)
}
printmsg()


let a=100;
function test(){
  a++;
  console.log(a);
}
test();
















/// CLOSURE........................................................................


function outer(){
  let a=10;
  function inner(){
    console.log(a);
  }
  //inner()
  return inner;

}
let res=outer(); 
res();                        //10

console.log(res)            //function inner output