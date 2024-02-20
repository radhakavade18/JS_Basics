let myAccount = {
    name: 'Radha Kavade',
    income: 0,
    expense : 0
}

let addIncome = function(account, income) {
    account.income += income;
}

let addExpense = function(account, amount) {
    account.expense += amount;
}

let getAccountSummery = function(account){
    return `Account for ${account.name} has $${account.income - account.expense}. $${account.income} is income and $${account.expense} is expense`;
}

let resetAccount = function(account){
    account.income = 0;
    account.expense = 0;
}

addIncome(myAccount, 2000);

addExpense(myAccount, 2.5);
addExpense(myAccount, 50);
addExpense(myAccount, 34);
addExpense(myAccount, 56);
addExpense(myAccount, 100);

let summery = getAccountSummery(myAccount);

console.log(myAccount.expense);
console.log(summery);

resetAccount(myAccount);

console.log(myAccount);