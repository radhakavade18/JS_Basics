function isValidPassword(password){
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('radhakavadepassword'));

// make guess
function makeGuess(num){
    let min = 1;
    let max = 5;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNum);
    // 0 to .999
    // 0 to 5
    return num === randomNum;
}

console.log(makeGuess(1));