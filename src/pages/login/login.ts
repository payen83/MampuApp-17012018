import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebservicesProvider } from '../../providers/webservices/webservices';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any = {username: '', password: ''};

  constructor(public webservices: WebservicesProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  login(){
      this.webservices.getAuth('login', this.user).then(response => {
        if(response.userData){
          console.log(response.userData);
          this.navCtrl.setRoot(TabsPage, {}, {animate: true});
        } else{
          if(response.error){
            alert(response.error.text);
          }
        }
      })
  }

  pageSignup(){
    this.navCtrl.push('SignupPage');
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad LoginPage');
  }

}
