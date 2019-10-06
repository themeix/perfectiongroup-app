import { Component, ViewChild } from "@angular/core";
import { NavController, App, AlertController } from "ionic-angular";
import { AuthService } from "../../providers/auth-service";
import { Common } from "../../providers/common";
import { HomePage } from '../../pages/home/home';
import { ConfirmPage } from "../confirm/confirm";
import { LocationPage } from "../location/location";



/**
 * Generated class for the SubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-submit',
  templateUrl: 'submit.html',
})

export class SubmitPage {
  @ViewChild("updatebox") updatebox;
  public userDetails: any;
  public resposeData: any;
  public dataSet: any;
  public noRecords: boolean;
  public close:boolean;
  userPostData = {
    user_id: "",
    token: "",
    feed: "",
    feed_id: "",
    lastCreated: "",
    ulocation:"",
    type:1,
    email:"",
    region_phone:"",
    timezone :"",
    contact_no:"",
    name:"",
  };

  constructor(
    public common: Common,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public app: App,
    public authService: AuthService
  ) {
    const data = JSON.parse(localStorage.getItem("userData"));
    const location = localStorage.getItem("location");

    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
    this.userPostData.email = this.userDetails.email;
    this.userPostData.name = this.userDetails.name;
    this.userPostData.contact_no = this.userDetails.contact_no;
    this.userPostData.ulocation=location;
    this.userPostData.lastCreated = "";
    this.userPostData.region_phone = "";
    this.userPostData.timezone = "";
    this.noRecords = false,
    this.close = false
    
  }

  location () {
    this.app.getRootNav().push(LocationPage);
  }

  getLocation() {
    this.common.presentLoading();
    this.authService.postData(this.userPostData, "location").then(
      result => {
        this.resposeData = result;
        console.log(result);
        if (this.resposeData.location) {
          this.common.closeLoading();
          this.dataSet = this.resposeData.location;
          if(this.dataSet[0].name){
            this.userPostData.ulocation = this.dataSet[0].name
          }
          console.log(this.dataSet);
          this.userPostData.region_phone = this.resposeData.user[0].region_phone;
          this.userPostData.timezone = this.resposeData.user[0].timezone;
          this.userPostData.timezone = this.resposeData.close;
          console.log(this.userPostData.region_phone);
          const dataLength = this.resposeData.location.length;
          this.userPostData.lastCreated = this.resposeData.location[
            dataLength - 1
          ].created;
        } else {
          console.log("No access");
          this.common.closeLoading();
        }
      },
      err => {
        //this.common.closeLoading();
        //Connection failed message
      }
    );
  }

  locationUpdate(data) {

    this.common.presentLoading();
    data.user_id=this.userPostData.user_id;
    data.token=this.userPostData.token;
    this.authService.postData(data, "locationUpdate").then(
      result => {
        this.resposeData = result;
        if (this.resposeData.location) {
          this.common.closeLoading();

          if (typeof(this.dataSet) != "undefined") {
            this.dataSet.unshift(this.resposeData.location);
          } else {
            this.getLocation();
          }
         // this.userPostData.feed = "";
          this.userPostData.ulocation=this.resposeData.location.name;

          //this.updatebox.setFocus();
          setTimeout(() => {
            //  this.updatebox.focus();
          }, 150);
        } else {
          console.log("No access");
        }
      },
      err => {
        //Connection failed message
      }
    );
    
  }

  feedUpdate() {

    
    if (this.userPostData.feed) {
      this.common.presentLoading();
      this.authService.postData(this.userPostData, "feedUpdate").then(
        result => {
          this.resposeData = result;
          if (this.resposeData.feedData) {
            this.common.closeLoading();
            this.userPostData.feed = "";
            this.userPostData.ulocation="";
            //this.updatebox.setFocus();
            setTimeout(() => {
              //  this.updatebox.focus();
            }, 150);
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


  nextpage () {
    
     localStorage.setItem('location', this.userPostData.ulocation);
    if (this.userPostData.feed=="" || this.userPostData.ulocation=="" ) {
      // alert("");
         const alert = this.alertCtrl.create({
           title: "Attention!",
           message: 'Please write down your issue.',
           buttons: ['OK']
         });
         alert.present();
         return false;
     }
    this.app.getRootNav().push(ConfirmPage,{ userPostData: this.userPostData });
  }




  feedDelete(feed_id, msgIndex) {
    if (feed_id > 0) {
      let alert = this.alertCtrl.create({
        title: "Delete Feed",
        message: "Do you want to buy this feed?",
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            }
          },
          {
            text: "Delete",
            handler: () => {
              this.userPostData.feed_id = feed_id;
              this.authService.postData(this.userPostData, "feedDelete").then(
                result => {
                  this.resposeData = result;
                  if (this.resposeData.success) {
                    this.dataSet.splice(msgIndex, 1);
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
        ]
      });
      alert.present();
    }
  }



  
  pushPage() {
    //this.viewCtrl.dismiss();
    this.app.getRootNav().push(SubmitPage);
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

  converTime(time) {
    let a = new Date(time * 1000);
    return a;
  }


  backToWelcome() {
    this.app.getRootNav().push(HomePage);
  }

  backToWelcome1() {
    console.log("test");
  }

  logout() {
    //Api Token Logout

    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }
  ionViewWillEnter() {
  //  this.viewCtrl.showBackButton(true)
  this.getLocation();
  console.log("test");
  }


}