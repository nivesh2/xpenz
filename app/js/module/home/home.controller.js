module.exports =  function(expenseService) {
    'use strict';
    var v = this;

    v.title = 'Daily Expense Page';
    v.totalExpense = expenseService.totalExpense || 0;
    v.amount = 0;
    v.message = '';

    //keep pushing into a list and sum total to display in GUI only.
    v.addExpense = function() {
        this.totalExpense = expenseService.addExpense({
            amount: v.amount,
            message: v.message,
            date: new Date()
        });
    };
}
