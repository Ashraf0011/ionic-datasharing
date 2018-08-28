import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Events } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public events: Events) {}

  ionViewDidLoad() {

  }

  addRecipe(){
    let data = {
      title: 'Potato Salad',
      ingredients: 'Everything'
    };
    this.events.publish( 'recipe:added', data);
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }


}
