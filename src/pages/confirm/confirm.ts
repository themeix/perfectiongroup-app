import { Component, ViewChild } from "@angular/core";
import { NavController, App, AlertController,NavParams, Platform} from "ionic-angular";
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
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})

export class ConfirmPage {
  @ViewChild("updatebox") updatebox;
  public userDetails: any;
  public resposeData: any;
  public dataSet: any;
  public noRecords: boolean;
  public userPostData : any;
  public close: any;
  public submitted: boolean;
  user = {
    name: "",
    adress1: "",
    adress2: "",
    zip: "",
    city: "",
    uid:"",
    state:"",
    locdata:"",
    region_phone:"",

  };


  constructor(
    public platform: Platform,
    public common: Common,
    private alertCtrl: AlertController,
    public navCtrl: NavController,
    public app: App,
    public authService: AuthService,
    public navParams: NavParams,
  ) {
    this.platform = platform;
    const data = JSON.parse(localStorage.getItem("userData"));
    this.userDetails = data.userData;
    this.noRecords = false
    this.userPostData  = this.navParams.get('userPostData');
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
    this.noRecords = false
    this.close=false;
    this.submitted=false;
    this.platform.ready().then(() => {
      console.log('Platform ready');

   // this.confirm();
    });
  }

  confirm() {


      // The platform is now ready, execute any native code you want
    this.common.presentLoading();
    this.authService.postData(this.userPostData, "confirm").then(
      result => {
        this.resposeData = result;
         
        if (this.resposeData.user) {
          this.common.closeLoading();
          this.user.adress1 =  this.resposeData.user.adress1;
          this.user.adress2 =  this.resposeData.user.adress2;
          this.user.city =  this.resposeData.user.city;
          this.user.state =  this.resposeData.user.state;
          this.user.zip =  this.resposeData.user.zip;
          this.user.locdata =  this.resposeData.locdata;
          this.user.region_phone =  this.resposeData.userinfo.region_phone;
          this.close = this.resposeData.close;
          console.log("userdata2");
          const dataLength = this.resposeData.user.length;
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


  startcall  () {
    let tel = this.user.region_phone;
    window.open(`tel:${tel}`, '_system');
  }


  feedUpdate() {
      this.common.presentLoading();
      this.authService.postData(this.userPostData, "feedUpdate").then(
        result => {
          this.resposeData = result;
          if (this.resposeData.feedData) {
            this.common.closeLoading();
            this.userPostData.feed = "";
            this.userPostData.ulocation="";
            this.submitted=true;
            //this.updatebox.setFocus();
            setTimeout(() => {
              if(this.userPostData.type==2){
                let tel = this.userPostData.region_phone;
                window.open(`tel:${tel}`, '_system');
              }
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

  confirmshow() {


let popupMessage = "<span>" + "You are requesting service at the following location:" + "</span><h3>" + this.userPostData.ulocation + "</h3><span>You described the issue as follows:</span><h3>"+this.userPostData.feed+"</h3>";

let latemsg="This Service request is being made outside of regular business hours. If this is an emergency, call in request.";

if(this.isWorkingHour) {
  popupMessage=popupMessage+"<p class='warning-text'>"+latemsg+"</p>";
}


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

      let alert1 = this.alertCtrl.create({
      
        title: "Confirm Request",
        message: popupMessage,
        buttons: [
          {
            text: "Cancel",
            role: "cancel",
            handler: () => {
              console.log("Cancel clicked");
            }
          },
          {
            text: "Confirm",
            handler: () => {
                this.feedUpdate();
            }
          }
        ]
      });
      alert1.present();
    
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