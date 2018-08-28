import { Component } from '@angular/core';
import { NavController, ModalController, Events } from 'ionic-angular';
import { SecondPage } from '../second/second';
import { UserProvider } from '../../providers/user/user';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalCtrl: ModalController, public userService: UserProvider, public events: Events) {}


  ionViewDidLoad(){
    this.events.subscribe('recipe:added',(data) =>{
      console.log(data);
    });
  }

  launchSecondPage(){
    let modal = this.modalCtrl.create(SecondPage);
    modal.present();
  }

}
