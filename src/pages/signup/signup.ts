import {Component} from '@angular/core';
import {IonicPage, NavController, ToastController} from 'ionic-angular';
import {AuthService} from "../../providers/auth-service";

import {TabsPage} from '../tabs/tabs';
import { Welcome } from '../welcome/welcome';
import { Common } from "../../providers/common";


/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({selector: 'page-signup', templateUrl: 'signup.html'})
export class Signup {
  resposeData : any;
  public dataSet: any;
  userData = {"password":"","email":"","cname":"","company_name":"","contact_no":"","region_name":"","access_code":""};
  constructor(public navCtrl : NavController, public authService : AuthService, private toastCtrl:ToastController,public common: Common,) { this.getregion();}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup');
  }

  signup() {
    if(this.userData.password && this.userData.email && this.userData.cname){
      //Api connections
    this.authService.postData(this.userData, "signup").then((result) =>{
    this.resposeData = result;
    if(this.resposeData.userData){
      console.log(this.resposeData);
      localStorage.setItem('userData', JSON.stringify(this.resposeData) )
      this.navCtrl.push(TabsPage);
    }
    else{
      this.presentToast("Please give valid access code!");
    }
    
    }, (err) => {
      //Connection failed message
    });
  }
  else {
    console.log("Give valid information.");
  }
  
  }

  login() {
    this
      .navCtrl
      .push(Welcome);
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  getregion() {
    this.common.presentLoading();
    this.authService.postData(this.userData, "getregion").then(
      result => {
        this.resposeData = result;
        if (this.resposeData.feedData) {
          this.common.closeLoading();
          this.dataSet = this.resposeData.feedData;
          console.log(this.dataSet);
        } else {
          console.log("No access");
        }
      },
      err => {
        //Connection failed message
      }
    );
  }

}
