/////PUSH (VALUE) METHOD................................................................

/*

const arr1=[1,2,3,4,5]
arr1.push(10);
console.log(arr1)


const arr2=[1,2,3,4,5]
const res1=arr2.push(10n);
console.log(arr2);
console.log(res1);





const arr3=[10,20,30,40,50]
arr3.push(60);
console.log(arr3);


let arr4=[10,20,30,40,50]
let res2=arr4.push(100);
console.log(arr1);
console.log(res2);


/////POP (VALUE) METHOD...................................................................

const arr5=[1,2,3,4,5]
arr5.pop()

let arr6=[10,20,30,40,50]
const result=arr6.pop();
console.log(arr6);
console.log(result);




/////UNSHIFT(VALUE) METHOD..................................................................

let arr7=[10,20,30,40,50]
arr7.unshift(200)

const arr8=["john","troy"]
const res=arr8.unshift("tinku");
console.log(arr8);
console.log(res)


//////SHIFT (VALUE) METHOD.................................................................

let arr9=[10,20,30,40,50]
arr9.shift()

const arr10=["john","troy",334,5665,]
const res=arr10.shift();
console.log(arr10);
console.log(res)



//////SPLICE(VALUE) METHOD.................................................................


//INSERTION .........................
const arr=[1,2,5,6,7]
//arr.splice(2,0,3,4)
//console.log(arr)

const res=arr.splice(2,0,30,40)
console.log(arr)
console.log(res)                      //[]=empty array







let arr1=[10,20,30,40,50]
arr1.splice(2,0,1000,2000,3000)
console.log(arr1);


//DELETION...................................

const comedyMovies=["Dhamal","Tubelight","Race-3","welcome"]
//comedyMovies.splice(0,1,2,0);  //[2,0,'tubelight','Race-3','welcome']
//comedyMovies.splice(1,2);
//comedyMovies.splice(1,2,0);       //['Dhamal',0,'welcome']
//console.log(comedyMovies);


const res=comedyMovies.splice(1,2);
console.log(res)                                            //[ 'Tubelight', 'Race-3' ]

console.log(comedyMovies);                                 // Rest output= [ 'Dhamal', 'welcome' ]






let arr=[1000,2000,3000,4000,5000]
arr.splice(1,3);
console.log(arr);
*/


///////SLICE (VALUE) METHOD= USED TO COPYARRAY ELEMENT..................................................


/*
let arr=[10,20,30,40,50,60]
let copy_element=arr.slice(0,4);
console.log(copy_element);                                   //[ 10, 20, 30, 40 ]




const youtuber=["Carry","Ashish","Harsh","Sandeep Maheshwari","Vivek Bindra","Elvish Yadav","","BB","Purav"]
 youtuber.slice(a=3,b=5)
 //console.log(youtuber);
// console.log(youtuber)     //output=below      
 
 /*[
  'Carry',
  'Ashish',
  'Harsh',
  'Sandeep Maheshwari',
  'Vivek Bindra',
  'Elvish Yadav',
  '',
  'BB',
  'Purav'
  ]

 const speaker=youtuber.slice(3,5)
//console.log(speaker)
//console.log(youtuber)










const users=["tinku","chombi","Komal","Neeraj"];
const females=users.slice(a=1,b=3)
/*console.log(users)                                     //[ 'tinku', 'chombi', 'Komal', 'Neeraj' ]
//console.log(females);                                //[ 'chombi', 'Komal' ]

const female=users.slice(a=1);
console.log(female)
const myArray=users.slice(1);
console.log(myArray)


const user=["Tinku","chombi","chombu","komal"]
const myArray=user.slice(1)
console.log(myArray)
 
myArray.splice(1,1)
console.log(myArray)



///////REVERSE(VALUE) METHOD....................................................................

/*
let arr7=[10,20,30,40,50]
arr7.reverse()


let arr8=[10,20,30,40,50]
const res=arr8.reverse()
console.log(arr8)
console.log(res)


let arr9=[10,20,30,40,50,60,70]
console.log(arr9.reverse());




///////INDEX OF(VALUE) METHOD..................................................................


const arr=["Ravi","Sunny","Raj","Sunny"];
console.log(arr.indexOf("john"));                           //-1 output.

console.log(arr.indexOf("Sunny"));                   //1 output.

console.log(arr.indexOf("Sunny",2));                    //3 output.



//CHECK given an array has element 30 or not and search from index 0 and 3 ,if present print index.

let arr=[10,20,30,40,50,60];
console.log(arr.indexOf(30));                                     //2
console.log(arr.indexOf(30,4));                           //-1



///////INCLUDES(VALUE) METHOD...................................................................



const arr=["Ravi","Suraj","Neeraj","KOMAL"]  
console.log(arr.includes("Komal",2))                                    //false

console.log(arr.includes("KOMAL",3))     
console.log(arr.includes("KOMAL",2))     
console.log(arr.includes("KOMAL",0))     






//Check given array has element 30 or not and search from index 0 and 3, it present print true....


let arr=[10,20,30,40,50]
console.log(arr.includes(30));                          //true
console.log(arr.includes(30,3));           //false


//////FOREACH(CALLBACK) METHOD................................................................


let output=[];                                    //1,2,3,4
let arr=[10,20,30,40]
arr.forEach((value,index,array)=>{
output.push(Math.floor(value/10))
})
console.log(output)
console.log(a)                       //a is not defined  doesnot return anythings











let arr=[1,2,3,4,5]
let output=[]
arr.forEach((val,index,array)=>{
output.push
})
console.log(output);                                 //[] output

const res=arr.forEach((val,i,arr)=>{
output.push(val*100)
})
console.log(res);                                //undefined
console .log(output)                                         [ 100, 200, 300, 400, 500 ]






let arr=[5,15,25,35,45]
const output=[]
arr.forEach(val=>{
  output.push(Math.floor(val/2))
})
console.log(output);




let arr=[10,20,30,40,50]
let sum=0;
arr.forEach(val=>{
  sum=sum+val;
})
console.log(`sum is: ${sum}`);




let arr=[1,2,3,4,5]
let output=[]
arr.forEach((val,i,arr)=>{
  output.push(val**2)
 arr[i]=(val**3)
})
console.log(output);
console.log(arr);

arr.forEach((val,i,arr)=>{
  arr[i]=Math.sqrt(val);
  arr[i]=Math.cbrt(val);

})

console.log(arr)
console.log(arr)


//Print even number from given array...
const arr=[1,2,3,4,5]
arr.forEach((val,i,array)=>{
   if(val%2===0){
    console.log(val + " "+"is even number;");
   }
});



/////SORT(CALLBACK) METHOD..........................................................................

const arr=[5,3,4,2,1,10]
const res=arr.sort((a,b)=>a-b) //Ascending Order
// arr.sort((a,b)=>b-a) Descending Order

console.log(arr) 
console.log(res)




let arr=[100,2000,380,940,50,0,2];
console.log(arr.sort((a,b)=>a-b))

let arr1=[100,2000,380,940,50,0,2];
console.log(arr1.sort((a,b)=>b-a))  

//////MAP (CALLBACK) METHOD...........................................................................


let arr=[1,2,3,4,5]
const output=arr.map((val,i,arr)=>             //curlybraces no use because single statement
  val*100
)
console.log(output)



let arr1=[1,2,3,4,5]
let sum=0;

const output1=arr1.map((val,i,arr)=>{
  sum=sum+val;
})
console.log(output1)                     /// [ undefined, undefined, undefined, undefined, undefined ]

console.log(sum)




//////REDUCE(CALLBACK) METHOD.............................................................................


let arr=[1,2,3,4,5]
let out=[]
const output=arr.reduce((accumulator,value,index,array)=>{
  accumulator=(accumulator+value);
  out.push(value);
  return accumulator;
},0)
console.log(out)                          //[ 1, 2, 3, 4, 5 ]

console.log(output)                        //15



*/



//////FILTER() METHOD...................................................................................



let arr=[10,200,300,40,500]
const res=arr.filter((val,i,arr)=>val>200)
console.log(res);








//////FLAT() METHOD........................................................................................
/*
let arr6=[1,2,3[4,5],6,[7,8,[9,10]],11,12]
const reslt=arr6.flat(arr6)
console.log(reslt);



//////ARRAY.IS ARRAY(LITERAL) METHOD...............................................................................

let arr1=[]
let arr2={}
let arr3="string"
console.log(Array.isArray(arr1))              //true
console.log(Array.isArray(arr2))
console.log(Array.isArray(arr3));               //false


console.log(Array.isArray({}))
console.log(Array.isArray(32432))           //false
console.log(Array.isArray([12,4545,5454,5454]));          //true

/////ARRAY.FROM (LITERAL) METHOD.................................................................................


let name="javascript";
const res=Array.from(name)
console.log(name);
console.log(res);



const str="HELLO";
const arr=Array.from(str)
console.log(arr);

*/