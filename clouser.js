function x() {
    let a = 10;
    function y() {
        console.log(a);
    }
    a = 100;
    return y;
}

const z = x();
z();