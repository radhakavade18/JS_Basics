// pass value to createCounter function which return the object function of
// increment - which increment value by 1
// decrement - which decrement value by 1
// reset - whic resets value to the original value

function createCounter (init) {
    const toReset = init; 
    console.log(toReset);
    return {
        increment : () => {
            return init += 1
        },
        decrement : () => {
            return init -= 1
        },
        reset : () => {
            return init = toReset;
        }
    }
}

const counter = createCounter(5);
console.log(counter);
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());