
export default function($stateProvider){
  'use strict';

  $stateProvider
    .state('today.list',{
      url:'/list',
      template:require('./today.html'),
      controller:'TodayController',
      controllerAs:'ctrl'
    });
}
