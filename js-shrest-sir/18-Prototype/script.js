///1...__proto__............................................................................................


/*
const human={
  eat:()=>{console.log(`${this.name}can eat`)},
  sleep:()=>{console.log(`${this.name}can sleep`)}
}
 
const user={
  name:"Chombu"
}
//user.prototype=human 
//console.log(user);                            






/*output====name
: 
"Chombu"
prototype
: 
{eat: ƒ, sleep: ƒ}
[[Prototype]]
: 
Object
﻿




user.prototype=human
console.log(Object.getPrototypeOf(user)===human)                          ///false




/*
user.__proto__=human;
console.log(Object.getPrototypeOf(user)===human)                          ///TRue
console.log(user.name)
console.log(user.sleep())
console.log(user.eat())








///2...OBJECT.SET PROTOTYPE OF (__________,__________)...........................................................



const animal={
  sound:function(){console.log(`${this.name} can sound`)}
};
const dog={
  name:"sheru",
  bark(){console.log("BHOW BHOW");}
}
Object.setPrototypeOf(dog,animal)
//dog.sound()
//dog.bark()


///console.log(doghasownproperty(sound));


const res=dog.sound()
console.log(res);                                         ////undefined



///3...OBJECT.GET PROTOTYPE OF (__________,__________)...........................................................



const animal={
  sound:function(){console.log(`${this.name} can sound`)}
};
const dog={
  name:"sheru",
  bark(){console.log("BHOW BHOW");}
}
Object.setPrototypeOf(dog,animal)
const parent=Object.getPrototypeOf(dog)
console.log(parent===animal);                               ///true



*/

///4..OBJECT.CREATE(_______,_______________)...............................................................


