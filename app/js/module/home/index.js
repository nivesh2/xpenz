import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.route';
import HomeController from './home.controller';

import userInfo from '../../services/userinfo.service';
import greeting from '../../directives/greeting.directive';


export default angular.module('app.home', [uirouter,userInfo,greeting])
  .config(routing)
  .controller('HomeController', HomeController)
  .name;
