import { Component, ViewChild } from "@angular/core";
import { NavController, App, AlertController,ToastController } from "ionic-angular";
import { AuthService } from "../../providers/auth-service";
import { Common } from "../../providers/common";
import { HomePage } from '../../pages/home/home';
import { Welcome } from "../welcome/welcome";


/**
 * Generated class for the SubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})

export class AboutPage {
  @ViewChild("updatebox") updatebox;
  public userDetails: any;
  public resposeData: any;
  public dataSet: any;
  userData = {"password":"","email":"","name":"","company_name":"","contact_no":"","region_name":"","access_code":""};
  public noRecords: boolean;
  userPostData = {
    user_id: "",
    token: "",
    feed: "",
    feed_id: "",
    lastCreated: ""
  };

  constructor(
    public common: Common,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public app: App,
    public authService: AuthService,
    private toastCtrl:ToastController,
  ) {
    const data = JSON.parse(localStorage.getItem("userData"));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
    this.userPostData.lastCreated = "";
    this.noRecords = false
    this.getprofile();
  }



  ProfileUpdate() {
    if(this.userData.email && this.userData.name){
      //Api connections
    this.authService.postData(this.userData, "updateprofile").then((result) =>{
    this.resposeData = result;
    if(this.resposeData.userData){
      console.log(this.resposeData);
      localStorage.setItem('userData', JSON.stringify(this.resposeData) )
     // this.navCtrl.push(TabsPage);
   //  localStorage.clear();
console.log(this.resposeData.userData);
     this.userData = this.resposeData.userData;
     this.userData.region_name=this.resposeData.userData.region;
     this.presentToast("Profile has been updated!");
    }
    else {
      this.presentToast("Please give valid username and password");
    }
    
    }, (err) => {
      //Connection failed message
    });
  }
  else {
    console.log("Give valid information.");
  }
  
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }



  getprofile() {
    this.common.presentLoading();
    this.authService.postData(this.userDetails, "getprofile").then(
      result => {
        console.log(result);
        this.resposeData = result;
        if (this.resposeData.userData) {
          this.common.closeLoading();
          this.userData = this.resposeData.userData;
          this.dataSet=this.resposeData.regiondata;
          this.userData.region_name=this.resposeData.userData.region;

          console.log(this.dataSet);
        } else {
          console.log("No access");
          this.common.closeLoading();
        }
      },
      err => {
        //Connection failed message
      }
    );
  }



  doInfinite(e): Promise<any> {
    console.log("Begin async operation");
    return new Promise(resolve => {
      setTimeout(() => {
        this.authService.postData(this.userPostData, "feed").then(
          result => {
            this.resposeData = result;
            if (this.resposeData.feedData.length) {
              const newData = this.resposeData.feedData;
              this.userPostData.lastCreated = this.resposeData.feedData[
                newData.length - 1
              ].created;

              for (let i = 0; i < newData.length; i++) {
                this.dataSet.push(newData[i]);
              }
            } else {
              this.noRecords = true;
              console.log("No user updates");
            }
          },
          err => {
            //Connection failed message
          }
        );
        resolve();
      }, 500);
    });
  }

  backToWelcome() {
    this.app.getRootNav().push(HomePage);
  }
  logout() {
    //Api Token Logout

  localStorage.clear();
    this.app.getRootNav().push(Welcome);
  }


}