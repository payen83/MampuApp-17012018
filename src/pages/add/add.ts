import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  staff: {name: string, icNo: string, company: string, imageurl: string};

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.staff = {name: '', icNo: '', company: '', imageurl: ''};
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  cancel(){
    this.viewCtrl.dismiss();
  }
  
  save(){
    if(this.staff.name != '' && this.staff.icNo != '' && this.staff.company != '' && this.staff.imageurl != '' ){
      this.viewCtrl.dismiss(this.staff);
    } else {
      alert('Please fill in all fields');
    }
  }

}
