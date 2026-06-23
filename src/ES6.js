//Introduction to variables in ES6

//Var
var Name = "Amirhosein";
console.log("Name with var: " , Name);

//Let
let age = 17;
console.log("Age with let: " , age);

//Const
const country = "Iran";
console.log("country with const: ", country);


//Difference between var and let
function test(){
    var x = 1;
    let y = 2;

    if(true){
        var x = 3;
        let y = 4;
        console.log("Inside if - x:", x);
        console.log("Inside if - y:", y);
    }
    console.log("Outside if - x:", x);
    console.log("Outside if - y:", y);
}
test();


//Arrow function to add two numbers
const add = (a, b)=> a + b;

console.log("Arrow function:",add(5, 10));
