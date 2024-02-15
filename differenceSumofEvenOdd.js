// assignment - 21
// Accept N numbers from user and return difference between summation of even elements and summation of odd elements.

const arr = [85, 66, 3, 80, 93, 88, 15];

const output = function (arr) {
    let even = 0, odd = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0){
            even += arr[i];
        } else {
            odd += arr[i];
        }
    }
    return even - odd;
}
console.log(output(arr));

// Accept N numbers from user and display all such elements which are divisible by 5.

const output1 = arr.filter(x => x % 5 === 0);
console.log(output1);

// Accept N numbers from user and display all such elements which are even and divisible by 5.

const output2 = arr.filter(x => x % 5 === 0 && x % 2 === 0);
console.log(output2);

// Accept N numbers from user and display all such elements which are divisible by 3 and 5.

const output3 = arr.filter(x => x % 5 === 0 && x % 3 === 0);
console.log(output3);

//Accept N numbers from user and display all such elements which are multiples of 11.

const output4 = arr.filter(x => x * 11);
console.log(output4);