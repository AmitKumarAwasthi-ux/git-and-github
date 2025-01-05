///WAYS TO CREATE ARRAY..............................................................................

///1 BY USING SQUARE BRACKETS AND LITERALS............................

/*

let arr=[]
console.log(arr)                      /////EMPTY ARRAY....Output=[]



let movies=["dhamal","phir hera pheri","welcome","dhol"]
console.log(movies);


let num=[10,20,30,40,50,]
console.log(num);

let arr1=[30,40,50,null,"amit",764374678n]
console.log(arr1);


*/

//////BY USING NEW KEYWORD AND ARRAY() CONSTRUCTOR..................................


const arr=new Array();
console.log(arr);

const arr1=new Array(10,20,30);
console.log(arr1);

const arr2=new Array("Amit","suraj","Ravi");
console.log(arr2);
console.log(typeof(arr2));


const user=new Array("Amit","suraj","Ravi");
console.log(user);
console.log(typeof(user));      ////object return means Array is a object
console.log(user[3]);        ///undefined
console.log(user[2]);

console.log(user.length);
console.log(user[user.length-2]);