// inbuilt method - concat 
// The concat() method of String values concatenates the string arguments to this string and returns a new string.

// merge 2 or more arrays in one array
// Ex - 
// arr1 = [1,2,3]
// arr2 = [4,5,6]
// mergedArr = [1,2,3,4,5,6];

const arr1 = [1,2,3];
const arr2 = [4,5,6];

function concatArray(arr1, arr2) {
    let concatArr = arr1;
    // console.log(arr2.length);
    for(let i = 0; i < arr2.length; i++){
        concatArr.push(arr2[i]);
    }
    return concatArr;
    // console.log(concatArr);
}

const res = concatArray(arr1, arr2);

console.log(res);