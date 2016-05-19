export default class HomeController {
  constructor(userInfo){
    this.userInfo = userInfo;
    this.title = 'Expense APP';
  }

  changeTitle(){
    this.title = 'One Touch App';
  }

  randomUser(){
    this.title = this.userInfo.getName();
  }
}
