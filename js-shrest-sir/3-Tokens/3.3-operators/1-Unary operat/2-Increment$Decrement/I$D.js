/////PRE INCREMENT OPERATORS...............................................................................

/*let a=10;
++a;
console.log(a);
console.log(++a);




let a=1;
++a;
++a;
++a;
++a;
let b=++a;
++b;
console.log(a);
console.log(b);




let a=1;
a=++a;
a=++a;
a=++a
a=++a
let b=++a;
b=++b + ++a;
console.log(a) ;
console.log(b);






/////PRE DECREMENT OPERATOR................................................................................


let a=5;
--a;
console.log(a);



let a=10;
a=--a;
a=--a;
a=--a;
let b=++a + --a;
--b;
console.log(a);
console.log(b);




let a=5;
a=++a*2 - --a*2;
console.log(a);




let a=1;
a=++a*2;
a=++a*2;
let b=++a*3 + --a*2 - --a*3;
b=++b*3/2;
console.log(a);
console.log(b);





let a=10;
a=++a*2
let b=(++a*4)/(--a*2)
b=(++b*3 + --b*2)/(++b*2)
console.log(a);
console.log(b);






/////POST INCREMENT OPERATOR........................................................................................




let a=1;
a=a++;
a=a++;
a=a++;
console.log(a);




let a=1;
a=a++;
let b=a++;
b=a++
b=a++
b=a++
console.log(a)
console.log(b)



let a=5;
a=++a + a++;
a=a++ + (--a);
console.log(a);






////POST DECREMENT OPERATOR.........................................................................................




let a=2;
a=a--;
a=a--;
a=a--;
a--
console.log(a);




let a=3;
a=a-- + a++;
a=--a + a++ + a-- + ++a
a=a++ * 3/2
console.log(a);



*/



let a=1;
a=(a++*2 + ++a*2 + a--*2)/(a++*3);
a=a++;
let b=++a*2 + --a*2 - a--*3;
b=(--b*2 + b++*3)/(b--*4)
console.log(a++*5/2);
console.log(b++*5/2);