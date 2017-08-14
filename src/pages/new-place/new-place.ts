import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation'
import { PlacesService } from "../../services/places-service";


/**
 * Generated class for the NewPlacePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-new-place',
  templateUrl: 'new-place.html',
})
export class NewPlacePage {
  location: {lat: number, lng: number} = {lat: 0, lng: 0};

  constructor(public navCtrl: NavController, private placesService: PlacesService, private geolocation: Geolocation) {
  }

  onAddPlace(value : { title: string }){
    this.placesService.addPlace({title: value.title, location: this.location});
    this.navCtrl.pop();

    //Check data sudah terkirim
    console.log("Clicked, you addPlace ",value);
  }

  onLocateUser(){
    this.geolocation.getCurrentPosition()
    .then(
      (location) =>{
        console.log('Location fetched successfully');
        this.location.lat = location.coords.latitude;
        this.location.lng = location.coords.longitude;
      }
    )
    .catch(
      (error) => console.log("An error occured")
    );

  }

}
