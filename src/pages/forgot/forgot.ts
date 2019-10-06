import { Component } from '@angular/core';

import { IonicPage, NavController, ToastController,NavParams } from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";
import { Welcome } from '../welcome/welcome';
/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {
  resposeData : any;
  userData = {"email":""};

  constructor(public navCtrl: NavController,public authService: AuthService, public navParams: NavParams,private toastCtrl:ToastController) {
  }


  reset(){
    if(this.userData.email){
     this.authService.postData(this.userData, "forgot").then((result) =>{
     this.resposeData = result;
    // this.presentToast("Password reset instructions will be sent to your registered email address");
    this.login();
     }, (err) => {
       //Connection failed message
     });
    }
    else{
    // this.presentToast("Give usern");
    }
   
   }
   login() {
    this
      .navCtrl
      .push(Welcome);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage');
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
