import angular from 'angular';

class UserInfo {
  constructor(){
    this.names = ['Harry','Bill','Mark','Steve','Annie'];
  }

  getName(){
    return this.names[Math.floor(Math.random() * this.names.length)];
  }
}

export default angular.module('services.user-info',[])
  .service('userInfo',UserInfo)
  .name;
