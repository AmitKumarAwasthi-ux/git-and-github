//////1..OBJECT.KEYS (OBJ-REF).................................................................................
/*
const obj={
  a:1,
  b:2,
  c:3,
}
console.log(Object.keys(obj));                  ///vvi =object is always constructor.....written in capital letter




const obj1={
  name:"Tinku",
  age:67,
}
console.log(Object.keys(obj1));


//////2..OBJECT.VALUES (OBJ-REF).................................................................................

const obj1={
  a:1,
  b:2,
  c:3,
}
console.log(Object.values(obj1));




//////4..OBJECT.KEYS (OBJ-REF).................................................................................


const obj3={
  a:1,
  b:2,
  c:3,
}
console.log(Object.entries(obj3));


const obj1={
  name:"oggy",
  channel:"cartoon network"
}
console.log(Object.entries(obj1));



//////5..OBJECT.assign(target_obj,src1,...,srcn)............................................................

const target={a:1,b:2};
const source={c:4,d:5};
const result=Object.assign(target,source);
console.log(result);


const user1={
  name:"chombu",
}

const info={
  age:34,
}
const address={
  city:"Noida",
  state:"up",
  age:27
}
const user=Object.assign(user1,info,address);
console.log(user);

const res=Object.assign({},user1,address,info);
console.log(res);

const res1=Object.assign({},user1,info,address);
console.log(res1);



//////6..OBJECT.FREEZE(OBJ-REF).................................................................................

const obj={
   name:"Miku",
   age:31,
}

Object.freeze(obj);
obj.age=24;
console.log(obj)

delete obj.age
console.log(obj)

obj.city="Rohini nagar"
console.log(obj)


//////7..OBJECT.is frozen (OBJ-REF)...............................................................................


const obj={
  name:"Tom",
  channel:"cartoon network",
}
//console.log(Object.isFrozen(obj))
Object.freeze(obj)
console.log(Object.isFrozen(obj))






//////8..OBJECT.Seal(OBJ-REF).................................................................................


const obj={
  name:"Mikuuuu",
  age:70,
}

Object.seal(obj);
console.log(obj);

obj.city="Noida"                               //no insertion
console.log(obj);


delete obj.age;
console.log(obj);                                //no deletion


obj.age=34
console.log(obj);                              //Updation allowed.

console.log(Object.isSealed(obj));                     //true

Object.isSealed()
Object.seal(obj)
console.log(Object.isSealed(obj));                     //true


//////9..OBJECT.get ownproperty names (OBJ-REF)......................................................


const obj={
  name:"Tinku",
  age:34,
  state:"up"
}
const res=Object.getOwnPropertyNames(obj)
console.log(res);


//////1..OBJECT.hasownproperty (OBJ-REF)......................................................................

const obj={
  name:"Tinku",
  age:34,
  state:"up"
}
//const res=Object.getOwnPropertyNames(obj)

console.log(res.hasownproperty("state"));



//////10..OBJECT.is  property (OBJ-REF)........................................................................


const obj={
  name:"Tinku",
  age:34,
  state:"up"
}
console.log(Object.is(obj.state,"UP"))                                  //false
console.log(Object.is(obj.state,"up"))                          //true or badmash chhora

if(Object.is(obj.state,"uP")){
  console.log("Badmash chhora")                          //true
}

if(Object.is("up","obj.state")){                      
  console.log("Badmash chhora")                            //true or badmash chhora
}



//////11..OBJECT.IS EXTENSIBLE(_)...............................................................


const obj={
  name:"Tinku",
  age:34,
  state:"up"
}
console.log(Object.isExtensible(obj))             //true



//////12..OBJECT.PREVENT EXTENSIONS(_)............................................................

const obj={
  name:"Tinku",
  age:34,
  state:"up"
}
//console.log(Object.isExtensible(obj))             //true

Object.preventExtensions(obj)
console.log(Object.isExtensible(obj))             //False 

//obj.country="India"
//console.log(country)                 ///inesrtion not allowed not defined

obj.state="Delhi"
console.log(obj);                      ///updation allowed 

delete obj.age;
console.log(obj);                                 ///deletion allowed 


*/
//////13..OBJECT.PREVENT EXTENSIONS(_)..............................................................

const user={
  name:"Alex"
}
user.age=34;
console.log(user);
console.log(user.age);


user.age=14;
console.log(user.age);


Object.defineProperties(user,"age",{
  value :54,
  writable : true,
  enumerable: true,
  configurable: true
}
)


const arr=Object.keys(user)
console.log(arr);


const res=Object.age(obj)
console.log(age);
//////14..OBJECT.PREVENT EXTENSIONS(_)............................................................
/*
const obj={
  name:"Dinga"
}
const res=Object.getOwnPropertyDescriptor(obj,"name")
console.log(res);

*/