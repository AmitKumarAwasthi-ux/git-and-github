///ARRAY = OBJECT,block of memory, AND NON PRIMITIVE means=MULTIPLE VALUE ACCESS.............................


const movies=["golmal","dhol","dhamal"]
console.log(movies);
console.log(typeof(movies));                     //object


/*

//////  HETEROGENEOUS=MULTIPLE ANY TYPE OF VALUE, IN JAVASCRIPT......................................


const arr=["amit",2333,null,true,undefined,4493943n,NaN]
console.log(arr);





/////DYNAMIC=IT IS INFINITE VALUE ACCESS IN JS .............................................


const arr1=["amit",2333,null,true,undefined,4493943n,NaN,434234,324,3242,3423,4234,423,4234,4234324,42423,423,4,4423,4234,2423424424,4,,4,42342344,2424,2,4,42,44,4,4,32,4,4,24,423,42,3424,424234,34234,234,42,42,4,4,34,42,34,,,2324,2,423,4234,4,,423,432,4,234,24,232,4,324,324,,432,432,4,324,32,423,,432,4,34,324,3,4324234,,4,3,2423,432,,23,,23,423,4,324,324,3,34,324,324,]
console.log(arr1);


/////ARRAY ELEMENTS AND ARRAY SIZE=ARRAY LENGTH..................................................

const arr2=["amit",2333,null,true,undefined,4493943n,111,1,1,23,,3332,,1]
console.log(arr2.length);

const cities=["up","goa","bihar","Delhi"];
console.log(cities.length)




//////////ARRAY OBJECT REFERENCE AND INDEX VALUE..........................

const res=['amit',213,"bihat",851135,null]           //res is array object reference..
console.log(res[3])
console.log(res[3-4])                      /////undefined
console.log(res[3-3])
console.log(res[3+1])

console.log(res.length)
console.log(res[res.length-1]);
console.log(res[res.length-3]);
console.log(res[res]);                           //////undefined



////////////UNDEFINED VALUE..........


const res2=['amit',213,"bihat",851135,null]           //element should be separated by commas,
console.log(res2[3-4])                                 //////////////////undefined
console.log(res2[res2]) 
console.log(res2[8])                                   //undefined


*/