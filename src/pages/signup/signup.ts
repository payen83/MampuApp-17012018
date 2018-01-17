import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WebservicesProvider } from '../../providers/webservices/webservices';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  user: any = {username: '', password: '', name: '', email: ''};

  constructor(public webservices: WebservicesProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  signup(){
    this.webservices.getAuth('signup', this.user).then(response => {
      if(response.userData){
        console.log(response.userData);
        this.navCtrl.setRoot(TabsPage, {}, {animate: true});
      } else{
        if(response.error){
          alert(response.error.text);
        }
      }
    }).catch(err => {
      alert(JSON.stringify(err))
    })
  }

  back(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
