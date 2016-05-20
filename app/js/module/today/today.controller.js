
export default function(expenseService){
  'use strict';

  const v = this;
  v.title = 'Today\'s Expense';
  v.expenseList = expenseService.expenseList;
}
