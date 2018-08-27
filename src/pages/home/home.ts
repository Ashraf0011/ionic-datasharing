import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SecondPage } from '../second/second';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController) {

  }
  launchSecondPage(){
      //  we dont need this for modules, we will add them via page
      // let data = {
      //   title: 'yammy dish',
      //   ingrediants:[
      //     'butter',
      //     'flour',
      //     'Suger',
      //     'oil'
      //   ],
      //   time: '10 mins'
      // };
      // this.navCtrl.push(SecondPage, data); //all the information from data variable are pushed to second page by the second parameter
      //  // now i have to grab this information form second page so i'll edit second.ts file to do that.

    let modal = this.modalCtrl.create(SecondPage);
    // now to send response back to first page ...
    modal.onDidDismiss((data, role) =>{
      console.log(data)
    } );



    modal.present();
  }

}
