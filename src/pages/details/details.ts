import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage' ;
import {Client} from "../../classes/client";
import {ClientProvider} from "../../providers/client/client";
import {Adresse} from "../../classes/adresse";
/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage implements  OnInit{

  client : Client = new Client();
  adresse : Adresse = new Adresse() ;
  constructor(public navCtrl: NavController,
              public navParams: NavParams ,
              private storage :Storage,
              private clientservice : ClientProvider) {
  }

  ngOnInit() {
    this.storage.get('client').then(
      (resp) =>{
        this.client = resp ;
        this.clientservice.getAdresseByClientId(resp.numClient).subscribe(
          (res) => this.adresse = res
        ) ;
      }
    )
  }


}
