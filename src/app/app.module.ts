import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StaffPageModule } from '../pages/staff/staff.module';
import { AddPageModule } from '../pages/add/add.module';
import { DetailPageModule } from '../pages/detail/detail.module';
import { LoginPageModule } from '../pages/login/login.module';
import { SignupPageModule } from '../pages/signup/signup.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WebservicesProvider } from '../providers/webservices/webservices';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    SignupPageModule,
    DetailPageModule,
    HttpClientModule,
    AddPageModule,
    StaffPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    WebservicesProvider
  ]
})
export class AppModule {}
