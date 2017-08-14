import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewPlacePage } from '../new-place/new-place';
import { PlacePage } from '../place/place';
import { PlacesService } from '../../services/places-service';
import { Place } from '../../model/place-model';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  places: {title: string}[] = [];

  constructor(public navCtrl: NavController, 
              private placesService: PlacesService,
              private modalCtrl: ModalController) {

  }

  ionViewWillEnter(){
    this.placesService.getPlaces()
      .then(
        (places) => this.places = places
      );

    console.log(this.places);

  }

  onLoadNewPlace(){
    this.navCtrl.push(NewPlacePage);

    console.log("Clicked, go to Add Place");
  }

  onOpenPlace(place: Place){
    this.modalCtrl.create(PlacePage, place).present();

    console.log("Clicked, go to Place");
  }


}
