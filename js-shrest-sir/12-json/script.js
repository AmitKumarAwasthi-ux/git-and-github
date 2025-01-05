///////JSON .STRINGIFY ............................................................................
/*
const obj={
  name:"Amit",
  age:33,
  city:"NOida",
  state:"up",
  is_working:"true",
  pincode:201301
}
const json_obj=JSON.stringify(obj)
console.log(json_obj)
console.log(json_obj,typeof(json_obj))


*/

////////JSON.PARSE...........................................................................................



const obj={
  name:"Amit",
  age:33,
  city:"NOida",
  state:"up",
  is_working:"true",
  pincode:201301
}
const json_obj=JSON.stringify(obj)
console.log(json_obj)
console.log(json_obj,typeof(json_obj))



const normal_obj=JSON.parse(json_obj)
console.log(json_obj,typeof(normal_obj))

console.log(normal_obj)




///////JSON SUPPORT SIX DATATYPES ONLY NOT SUPPORT LIKE FUNCTION................................







