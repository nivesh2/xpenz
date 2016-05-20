import angular from 'angular';
import uiRouter from 'angular-ui-router';

//import AppController from './app.controller';
import routing from './app.config';
import home from './module/home';
import todaysExpense from './module/today';

import expenseService from './services/expense.service';

//base module
angular.module('app',[uiRouter,home,expenseService,todaysExpense])
  .config(routing);
