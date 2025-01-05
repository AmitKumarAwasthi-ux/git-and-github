/*let a=1;
a=(a++*2 + ++a*2 + a--*2)/(a++*3);
a=a++;
let b=++a*2 + --a*2 - a--*3;
b= (--b*2 + b++*3)/(b--*4);
console.log(a++*5/2);
console.log(b++*5/2);


let a=+prompt("enter a number");
let res=(a%7===0&&a%10===7)?"ends with 7 and divisible by 7":false*/


let age=+prompt("enter age");
let res=(age>17&&age<60)?"eligible":(age>59)>"senior citizen":"underage";
console.log(res);

//check the number is even or odd

let num=+prompt("enter num");
let res1=(num%2===0)?"even":(num%2!==0)?"odd";
console.log(res1);


//check the condition

let gf=prompt("enter ur response");
let resp=(gf==="yes")?"meri wali alag h":(gf==="not")?"jaa simran jaa";
console.log(gf);

//check the score candidate..

let score=prompt("Enter ur score");
let scr=(score>=90)?"A":(score>=80)?"B":(score>=70)?"c":(score>=60)?"D":(score<=60)?"fail h";
console.log(scr);

//check condition

let item1=+prompt("Enter first item");
let item2=+prompt("enter second item");
let item3=+prompt("Enter third item");
let item4=+prompt("enter fourth item");
let item5=+prompt("enter fifth item");

let add=(item1+item2+item3+item4+item5);
let out=(add<)



