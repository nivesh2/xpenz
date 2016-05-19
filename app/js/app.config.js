'use strict';

var routing = function ($stateProvider,$urlRouterProvider,$locationProvider){
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('contacts',{
      abstract:true,
      url:'/contacts',
      template:'<h1>Contacts</h1> <br> <ui-view/>',
    })
    .state('contacts.list',{
      url:'/list',
      template:'<h3>List 1</h3>'
    })
    .state('contacts.detail',{
      url:'/detail',
      template:'<h3>Detail 1</h3>'
    });

};

//routing.$inject = ['$urlRouterProvider','$locationProvider'];

export default routing;
