
import angular from 'angular';
import uirouter from 'angular-ui-router';

import TodayController from './today.controller';
import route from './today.route';

export default angular.module('todayExpense.module',[uirouter])
  .config(route)
  .controller('TodayController',TodayController)
  .name;
