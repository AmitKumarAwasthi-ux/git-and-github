///AN OBJECT IS A BLOCK OF MEMORY WHICH HAS STATE (VARIABLE),BEHAVIOUR(METHODS) AND WHERE WE CAN STORE HETEROGENOUS DATA.......

/*

const user={
  user_Id:123,                                    ////////state(varible)
  is_Loggin:true,
  userName:"Ram",
  userInfo:function(){
    console.log(`userName is:${this.userName}`);            ///////BEHAVIOUR(METHODS)
  }
}
console.log(user);
//console.log(user[userInfo])




///////AN OBJECT IS A COLLECTION OF KEY-VALUE PAIRS THAT CAN CONTAIN VARIOUS DATATYPES,SUCH AS NUMBERS,STRINGS,AARAYS,FUNCTIONS AND OTHER OBJECTS.................

const obj={
  name:"chombu",
  age:23,

}
console.log(obj.name);


////////IN ONE OBJECT, WE CAN HAVE MULTIPLE KEY VALUE PAIR AND IT SHOULD BE SPARATED BY(,)COMMA..........



const obj1={
  name:"chombu",
  age:23,

}
console.log(obj1.age);


/////////WE CAN ACCESS VALUE OF OBJECT USING (.)  OPERATOR OR SQUARE BRACKETS[], OBJECT REFERENCE AND KEYNAME


const obj2={
  name:"chombu2",
  age:23,

}
console.log(obj2.age);
//console.log(obj2[name])        ////////error refference error............
console.log(obj2["name"])         ///////Always include in double quotes in object...........
console.log(obj2["age"]);


/////EXAMPLE.1...................................................................................

const obj3={
  userName:"Ram",
  age:26,

}

console.log(`userName is ${obj3.userName}`) 
console.log(obj3["userName"])         ///////Always include in double quotes in object...........
console.log(obj3["age"]);


/////EXAMPLE..2...........................key always in Ascending order............................


const numObj={
  5:"React",
  2:"css",
  0:"Html",
  3:"javascript",
  4:"Node",
  1:"Tailwind",
}
console.log(numObj);



///////EXAMPLE..3..................................................................................................



const obj5={
  user:"Ram",
  age:26,
  city:"phurphuri nagar"
}
console.log(obj5)

/////EXAMPLE..4...................................................................................................


const obj6={
  "userName":"Ram And shyam",
  age:26,

}
console.log(obj6["userName"]) 




/////EXAMPLE..5...................................................................................................


const key=prompt("Enter your key")
const info={
  [key]
}
console.log(info);






/////EXAMPLE..6...................................................................................................

const key2=prompt("Enter your key");
const value=prompt("Enter your value");

const info2={
  [key2]:value
}
console.log(info2);



/////EXAMPLE..7...................................................................................................

const obj8={}
const input=+prompt("Enter how many detail you want to add");
for(let i=1;i<=n;i++)
{
  const key=prompt(`Enter ${i} key`);
  const value=prompt(`Enter ${i} key`);
  obj8[key]=value;

  }
  console.log(obj8);
*/

/////EXAMPLE..4...................................................................................................

const player1="Virat";
const player2="Ronaldo";
const king={
  player1:player1,
 player2
}
console.log(king)