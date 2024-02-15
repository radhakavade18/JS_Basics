// createOrder => proceedToPayment => showOrderSummery => updateWallet

const cart = ["shoe", "pen", "note book", "laptop"]

createOrder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    }).catch((err) => {
        console.log(err.message);
    })
    .then(function (orderId){
        return proceedToPayment(orderId);
    }).catch((err) => {
        console.log(err.message);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
        return showOrderSummery(paymentInfo);
    })
    .catch((err) => {
        console.log(err.message);
    })
    .then(function(walletBalance) {
        console.log(walletBalance);
        return updateWallet(walletBalance);
    })
    .catch((err) => {
        console.log(err.message);
    })

function createOrder(cart) {
    // 1st function which return a promise -> order id
    return new Promise((resolve, reject) => {
        if (!validateCart) {
            reject(new Error("Cart is not valid"));
        }
        resolve('12345');
    })
}

function proceedToPayment(orderId) {
    // 2nd function return promise -> payment status
    return new Promise((resolve, reject) => {
        if (!orderId) {
            reject(new Error("Order id is invalid"));
        }
        resolve('Payment is Successful!');
    })
}

function showOrderSummery(paymentInfo) {
    return new Promise((resolve, reject) => {
        if (!paymentInfo) {
            reject(new Error("Invalid payment info"));
        }
        resolve('wallet balance : 1200');
    })
}

function updateWallet(walletBalance) {
    return new Promise((resolve, reject) => {
        if (!walletBalance) {
            reject(new Error("Invalid wallet balance"));
        }
        resolve(`update ${walletBalance}. Thanks for shoping!!`);
    })
}

function validateCart() {
    return true;
}