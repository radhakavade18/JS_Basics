Function.prototype.myCall = function(...arg){
    let obj = this;
    return function(){
        obj.call(...arg);
    }
}

let user = {
    name : 'Radha',
    age : 28
}

let user2 = {
    name : 'kavade',
    age : 56
}

function printUser(eng) {
    console.log(`${this.name} ${this.age} ${eng}`);
}

printUser.call(user, 'engineer');
// printUser.myCall(user);