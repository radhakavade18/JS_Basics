// flatterend the array
// input = [[1], [[[2]]], [3], 4,5];
// output = [1,2,3,4,5]

let arr = [[1], [[[2]]], [3], 4, 5]

function flattenArray(arr) {
    let flatterend = [];

    arr.forEach((ele) => {
        if (Array.isArray(ele)) {
            flatterend = flatterend.concat(flattenArray(ele));
        }
        else {
            flatterend.push(ele);
        }
        console.log(ele, Array.isArray(ele));
    })
    return flatterend;
}

let res = flattenArray(arr);
console.log(res);