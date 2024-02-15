let name = {
    firstName : 'Radha',
    lastName : 'Kavade'
}

const printName = function(hometown, state){
    console.log(`${this.firstName} ${this.lastName} ${hometown} ${state}`);
}

let printMyName = printName.bind(name, 'satara');
printMyName('Maharastra');

// Own implimentation of our bind method

Function.prototype.myBind = function(...arg){
    let obj = this;     // this is pointing to printName function as we call this method with myBind
    param = arg.splice(1);  // splice method removes 1st element and copy remaining elements in another array
    return function(...arg2){
        obj.apply(arg[0], [...param, ...arg2]);     // concated params and arg2 which gets while calling function
    }
}

let printMyName2 = printName.myBind(name, "satara");
printMyName2('Maharastra');