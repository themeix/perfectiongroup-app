import { Component, ViewChild } from "@angular/core";
import { NavController, App, AlertController, Alert } from "ionic-angular";
import { AuthService } from "../../providers/auth-service";
import { Common } from "../../providers/common";
import { SubmitPage } from '../../pages/submit/submit';
import { HomePage } from '../../pages/home/home';
@Component({ selector: "page-list", templateUrl: "list.html" })
export class ListPage {
  @ViewChild("updatebox") updatebox;
  public userDetails: any;
  public resposeData: any;
  public dataSet: any;
  public noRecords: boolean;
  public nodata: boolean;
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
    this.noRecords = false;
    this.noRecords = false;
    this.getFeed();
  }

  getFeed() {
    this.common.presentLoading();
    this.authService.postData(this.userPostData, "feed").then(
      result => {
        this.resposeData = result;
        if (this.resposeData.feedData) {
          this.common.closeLoading();
          this.dataSet = this.resposeData.feedData;
          console.log(this.dataSet);

          const dataLength = this.resposeData.feedData.length;

          this.userPostData.lastCreated = this.resposeData.feedData[
            dataLength - 1
          ].created;
        } else {
          this.common.closeLoading();
          this.nodata = true;

          console.log("No access");
        }
      },
      err => {
        //Connection failed message
      }
    );
  }

  feedUpdate(data) {
      data.user_id=this.userPostData.user_id;
      data.token=this.userPostData.token;
      data.email=this.userPostData.email;
      data.name=this.userPostData.email;
      data.contact_no=this.userPostData.contact_no;
      data.resub=1;
      this.common.presentLoading();
      this.authService.postData(data, "feedUpdate").then(
        result => {
          this.resposeData = result;
          if (this.resposeData.feedData) {
            this.common.closeLoading();
            this.dataSet.unshift(this.resposeData.feedData);
            //this.updatebox.setFocus();
            setTimeout(() => {
              //  this.updatebox.focus();
            }, 150);
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

 resubmit(data) {

      let alert1 = this.alertCtrl.create({
      
        title: "Do you want to resubmit this request",
       // message: "Are You Sure?",
        buttons: [
          {
            text: "No",
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            }
          },
          {
            text: "Yes",
            handler: () => {
              this.feedUpdate(data);
            }
          }
        ]
      });
      alert1.present();
}



  converTime(time) {
    let a = new Date(time * 1000);
    return a;
  }

  backToWelcome() {
    this.app.getRootNav().push(HomePage);
  }

  logout() {
    //Api Token Logout

    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }
}
