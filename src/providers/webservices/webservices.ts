import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the WebservicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WebservicesProvider {
  baseURL: string = 'http://localhost/mampu/';
  authURL: string = 'http://localhost/mampu/auth/api/';

  constructor(public http: HttpClient) {
    console.log('Hello WebservicesProvider Provider');
  }

  getAuth(type: string, user: any): Promise<any>{
    let url: string = this.authURL + type;
    let body = user;
    
    let header = new HttpHeaders().set('Content-Type', 'text/plain');
    

    return new Promise((resolve, reject) => {
      this.http.post(url, body, {
        headers: header
      }).subscribe(res => {
        alert('success')
        resolve(res);

      }, err => {
        alert('fail')
        reject(err);
      })
    })

  }

  getStaff(): Promise<any>{
    let url: string = this.baseURL + 'output.php';

    return new Promise((resolve, reject) => {
      this.http.get(url)
      .subscribe(data => {
        resolve(data);
      }, err => {
        reject(err);
      })
    })
  }

  saveStaff(staff: any): Promise<any> {
    let url: string = this.baseURL + 'create.php';
    let body = 'name=' + staff.name;
    body += '&icNo=' + staff.icNo;
    body += '&company=' + staff.company;
    body += '&imageurl=' + staff.imageurl;

    let header = new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded');

    return new Promise((resolve, reject) => {
        this.http.post(url, body, {
          headers: header
        }).subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        })
    })

  }

}
