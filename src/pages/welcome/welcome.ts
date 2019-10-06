import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Login } from '../login/login';
import { Signup } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import {ToastController } from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";
import { ForgotPage } from '../forgot/forgot';
/**
 * Generated class for the Welcome page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class Welcome {
  resposeData : any;
  userData = {"username":"", "password":""};

 constructor(public navCtrl: NavController, public authService: AuthService, private toastCtrl:ToastController) {
 
   if(localStorage.getItem('userData')){
     this.navCtrl.setRoot(TabsPage);
   }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Welcome');
  }

  login(){
   this.navCtrl.push(Login);
  }

  signup(){
   this.navCtrl.push(Signup, {}, {animate:false});
  }

  forgot(){
    this.navCtrl.push(ForgotPage, {}, {animate:false});
   }
 
  dologin(){
    if(this.userData.username && this.userData.password){
     this.authService.postData(this.userData, "login").then((result) =>{
     this.resposeData = result;
     console.log(this.resposeData);
     if(this.resposeData.userData){
      localStorage.setItem('userData', JSON.stringify(this.resposeData) )
     this.navCtrl.push(TabsPage);
   }
   else{
     this.presentToast("Please give valid username and password");
   }
     
 
 
     }, (err) => {
       //Connection failed message
     });
    }
    else{
     this.presentToast("Give username and password");
    }
   
   }
 
 
   presentToast(msg) {
     let toast = this.toastCtrl.create({
       message: msg,
       duration: 2000
     });
     toast.present();
   }

}



