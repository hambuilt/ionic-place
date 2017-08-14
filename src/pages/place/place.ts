import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PlacePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-place',
  templateUrl: 'place.html',
})
export class PlacePage {
  lat: number;
  lng: number;

  constructor(private viewCtrl : ViewController, private navParams: NavParams) {
    this.lat = this.navParams.data.location.lat;
    this.lng = this.navParams.data.location.lng;
  }

  onDismiss(){
    this.viewCtrl.dismiss();
  }

}
