import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  eventList: Array<{title: string, location: string, date: string}>;

  constructor(public navCtrl: NavController) {
      this.eventList = [
        {title: 'Meeting with JPM', location: 'Putrajaya', date: '17/01/2018'},
        {title: 'Perhimpunan Bulanan', location: 'Auditorium', date: '19/01/2018'},
        {title: 'Tahun Baru Cina', location: 'Not available', date: '15/02/2018'}
      ];

      console.log(this.eventList);
  }

}
