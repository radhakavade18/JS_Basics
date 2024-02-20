let result1 = document.getElementById('result1');
let result2 = document.getElementById('result2');
let result3 = document.getElementById('result3');

let dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black'
}

let posts = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());

let buyLaptop = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(dell);
    }, 2000);
})

// with Promise
function fetch1() {
    result1.innerHTML = ' Fetching data.....';
    buyLaptop.then((res) => {
        console.log(res);
        result1.innerHTML = JSON.stringify(res);
    })
}

// with Async/ Await
async function fetch2() {
    result2.innerHTML = 'Fetchind Data.....';

    let data = await buyLaptop;

    result2.innerHTML = JSON.stringify(data);
    console.log(data);
}

// fetch API with Promises
// function fetch3() {
//     result3.innerHTML = 'Fetchind Data.....';
//     posts.then(res => {
//         console.log(res);
// result3.innerHTML = JSON.stringify(data);
//     })
// }

// Fetch API with Async Await
async function fetch3() {
    result3.innerHTML = 'Fetchind Data.....';
    let res = await posts;
    result3.innerHTML = JSON.stringify(res);
}

fetch3();