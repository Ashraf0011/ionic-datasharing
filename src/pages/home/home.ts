import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SecondPage } from '../second/second';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public userService: UserProvider) {

  }
  launchSecondPage(){

    let modal = this.modalCtrl.create(SecondPage);
    // now to send response back to first page ...
    modal.onDidDismiss((data, role) =>{
      console.log(data);
    } );



    modal.present();
  }

}
