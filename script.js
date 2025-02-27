var  height;
console.log(height);  //  ->  undefined
console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined
let height;
console.log(height); // -> undefined
var height;
var height;
console.log(height) // -> undefined
let  height;
let  height;  //  ->  Uncaught  SyntaxError:  Identifier  'height'  has  already  been  declared
console.log(height);
let  height  =  180;
let  anotherHeight  =  height;
let  weight;
console.log(height);  //  ->  180
console.log(anotherHeight);  //  ->  180
weight  =  70;    
console.log(weight);  //  ->  70
let  height  =  180;
console.log(height);  //  ->  180
console.log("height");  //  ->  height
