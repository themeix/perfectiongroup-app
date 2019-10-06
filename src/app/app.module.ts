import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AuthService } from '../providers/auth-service';
import { SplitPane } from '../providers/split-pane';
import { Common } from '../providers/common';
import { HttpModule } from "@angular/http";
import { Welcome } from '../pages/welcome/welcome';
import { Login } from '../pages/login/login';
import { Signup } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SubmitPage } from '../pages/submit/submit';
import { ConfirmPage } from "../pages/confirm/confirm";
import { LocationPage } from "../pages/location/location";
import { ListPage } from '../pages/list/list';
import { ForgotPage } from '../pages/forgot/forgot';
import { CallPage } from '../pages/call/call';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MomentModule } from 'angular2-moment';
import { LinkyModule } from 'angular-linky';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    MyApp,
    Welcome,
    Login,
    Signup,
    ForgotPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SubmitPage,
    ListPage,
    CallPage,
    ConfirmPage,
    LocationPage,
  ],
  imports: [
    BrowserModule,HttpModule,MomentModule,LinkyModule,
    IonicModule.forRoot(MyApp),
    BrMaskerModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Welcome,
    Login,
    Signup,
    ForgotPage,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SubmitPage,
    ListPage,
    CallPage,
    ConfirmPage,
    LocationPage,
  ],
  providers: [
    StatusBar,

    SplashScreen,AuthService,SplitPane,Common,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
