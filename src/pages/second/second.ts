import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
   /** we can see the data recieved by: *** console.log(this.navParams.get('title')); ***
    *  this works only for data flow from 1>2, 1>3, 2>3 but not 1<3 meaning data can not be
    *  recieved backwords. To do that 1<>2 , 2<>3 we have to use modules.
    **/
    console.log(this.navParams.get('title'));
  }
  closeModal(){
    // taking information into new variables
    let data = {
    title: 'yammy dish',
    message: 'how are you'};

    this.viewCtrl.dismiss(data);
  }
 // Now, another way to share data anywhere in the app is using PROVIDER.


}
