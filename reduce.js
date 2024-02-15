// console.log(3>2>1);     // false
// console.log(1<2<3);     // true

// const arr = [1,3,5,7,8];

// const output = arr.reduce((acc, curr) => {
//     if(curr > acc){
//         acc = curr;
//     }
//     return acc;
// }, 0)

// console.log(output);

const users = [
    {first: 'Radha', last: 'kavade', age: 28},
    {first: 'Pooja', last: 'kavade', age: 32},
    {first: 'Rajat', last: 'kavade', age: 26},
]

const output = users.reduce((acc, curr) => {
    if(curr.age < 30) {
        acc.push(curr.first);
    }
    return acc;
}, []);

console.log(output);