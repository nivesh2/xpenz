import angular from 'angular';
import uiRouter from 'angular-ui-router';

//import AppController from './app.controller';
import routing from './app.config';
import home from './module/home';


angular.module('app',[uiRouter,home])
  .config(routing);
