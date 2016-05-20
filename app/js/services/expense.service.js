import angular from 'angular';

class ExpenseService {
    constructor() {
        this.expenseList = [];
        this.totalExpense = 0;
    }

    setExpenseList(v){
      this.expenseList.push(v);
    }
    getExpenseList(){
      return this.expenseList;
    }

    setTotalExpense(v){
      this.totalExpense = v;
    }
    getTotalExpense(){
      return this.totalExpense;
    }

    addExpense(v){
      this.totalExpense +=v.amount;
      this.expenseList.push(v);
      return this.totalExpense;
    }

}

export default angular.module('services.expense', [])
    .service('expenseService', ExpenseService)
    .name;
