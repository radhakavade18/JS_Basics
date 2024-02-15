function Countdown(sec){
    return new Promise((resolve, reject) => {
        for(let i = sec; i >= 0; i--){
            setTimeout(() => {
                if(i < 0){
                    reject('Counter failed');
                }
                if(i > 0) {
                    console.log(i + '....');
                }
                else {
                    resolve(console.log('GO'));
                }
            }, (sec - i) * 1000);
        }
    })
}

const p = Countdown(5);
p.then(() => {
    console.log("COuntdoun success!");
})
p.catch((err) => {
    console.log(err.message);
})