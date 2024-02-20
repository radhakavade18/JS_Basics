const myAccount = {
    name: 'Radha Kavade',
    expense: [],
    income: [],
    addExpense: function (description, amount) {
        this.expense.push({ description: description, amount: amount });
    },
    addIncome: function (description, amount) {
        this.income.push({ description: description, amount: amount })
    },
    getAccountSummery: function () {
        let totalExpense = 0;
        let totalIncome = 0;
        this.expense.forEach((expense) => {
            totalExpense = totalExpense + expense.amount
        })
        this.income.forEach((income) => {
            totalIncome += income.amount
        })
        let balance = totalIncome - totalExpense;
        return `${this.name} has balance $${balance}. $${totalIncome} is a income. $${totalExpense} is expenses.`
    }
}
myAccount.addIncome('job', 1000);
myAccount.addExpense('Rent', 250);
myAccount.addExpense('Bills', 150);
myAccount.addExpense('Coffee', 2);
console.log(myAccount.getAccountSummery());

console.log(myAccount.expense);