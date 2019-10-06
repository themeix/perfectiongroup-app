import { Component, ViewChild } from "@angular/core";
import { NavController, App, AlertController,NavParams } from "ionic-angular";
import { AuthService } from "../../providers/auth-service";
import { Common } from "../../providers/common";
import { HomePage } from '../../pages/home/home';




/**
 * Generated class for the SubmitPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})

export class LocationPage {
  @ViewChild("updatebox") updatebox;
  public userDetails: any;
  public resposeData: any;
  public dataSet: any;
  public noRecords: boolean;
  
  public store: any;
  public submitted: boolean;
  userData = {"name":"","adress1":"","adress2":"","city":"","state":"","zip":"","user_id":"","token":""};
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
    public navParams: NavParams,
  ) {
    const data = JSON.parse(localStorage.getItem("userData"));
    this.userDetails = data.userData;
    this.userPostData.user_id = this.userDetails.user_id;
    this.userPostData.token = this.userDetails.token;
    this.noRecords = false
    this.submitted=false;
   // console.log (this.userPostData);
  
  }

  feedUpdate() {
      this.common.presentLoading();
      this.userData.user_id=this.userPostData.user_id;
      this.userData.token=this.userPostData.token;
      this.authService.postData(this.userData, "locationUpdate").then(
        result => {
          this.resposeData = result;
          if (this.resposeData.location) {
            this.common.closeLoading();
            this.submitted=true;
            setTimeout(() => {
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
  goback() {
    this.navCtrl.pop();
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

  isWorkingHour(now) {
    return now.getDay() <= 4 && now.getHours() >= 9 && now.getHours() < 17;
  }
  logout() {
    //Api Token Logout

    localStorage.clear();
    setTimeout(() => this.backToWelcome(), 1000);
  }
}