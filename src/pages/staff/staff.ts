import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { WebservicesProvider } from '../../providers/webservices/webservices';


@IonicPage()
@Component({
  selector: 'page-staff',
  templateUrl: 'staff.html',
})
export class StaffPage {
  staffList: Array<any>;

  constructor(public modalCtrl: ModalController, public webservices: WebservicesProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.webservices.getStaff().then(response => {
      console.log(response);
      this.staffList = response.person;
    });
  }

  pageAdd(){
    let modal = this.modalCtrl.create('AddPage');
    modal.present();

    modal.onDidDismiss(data => {
      if(data){
        this.webservices.saveStaff(data).then(response => {
          console.log(response);
          if(response.success == 1){
            this.staffList.push(data);
          } 
          alert(response.message);
        })
      }
    })
  }

  pageDetail(staff: any){
    this.navCtrl.push('DetailPage', {item: staff});
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.ionViewDidLoad();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

}
