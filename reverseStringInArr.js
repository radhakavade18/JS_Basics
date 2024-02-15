// PS - reverse the word in string which is having odd number of length in the same place
// EX Input - Hello My name is Radha
// O/P - olleH My name id ahdaR

const statement = 'I love my India';

const arr = statement.split(" ");

for(let item of arr){
    if(item.length % 2 != 0){
        let index = arr.indexOf(item);
        arr.splice(index, 1, item.split('').reverse().join(""));
    }
}

console.log(arr.join(' '));