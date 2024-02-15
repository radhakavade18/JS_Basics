// one way to do is with bind method

let multiply = function(x,y){
    console.log(x * y);
}

// when wo do this, it makes copy of multiply method with the first argument as 2 and second will be 5
// x = 2 & y = 5
// & does not invoke it directly
let multiplyBy2 = multiply.bind(this, 2);   
multiplyBy2(5);

// if we add 1 more parameter to bind method, then it will ignore the value 5 and 
// put x = 3, y = 4
let multiplyBy3 = multiply.bind(this, 3, 4);   
multiplyBy3(5);

// another way to do with clousers
function multiplye(x){
    return function(y){
        console.log(x * y);
    }
}

let multiplybyTwo = multiplye(2);
multiplybyTwo(3);

let multiplybyThree = multiplye(2);
multiplybyTwo(5);