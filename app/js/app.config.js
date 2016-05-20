'use strict';
var route = {
    home :{
      url:'/',
      template:require('./module/home/home.html'),
      controller:'HomeController',
      controllerAs:'ctrl'
    },
    today:{
      abstract:true,
      url:'/today',
      template:'<ui-view></ui-view>'
    }
};

export default function ($stateProvider,$urlRouterProvider,$locationProvider){
  $locationProvider.html5Mode(true);
  //base route
  $urlRouterProvider.otherwise('/');

  //list out all the routes for the application
  $stateProvider
    .state('home',route.home)
    .state('today',route.today);

}
