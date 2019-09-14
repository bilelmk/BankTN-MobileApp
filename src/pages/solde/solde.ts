import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ClientProvider} from "../../providers/client/client";
import {Compte} from "../../classes/compte";
import {Client} from "../../classes/client";
import { Storage } from "@ionic/storage";

/**
 * Generated class for the SoldePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-solde',
  templateUrl: 'solde.html',
})
export class SoldePage implements OnInit{

  Comptes : Compte[] ;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private clientservice : ClientProvider,
              private storage : Storage) {
  }

  ngOnInit() {
    this.storage.get('client').then(
      (resp)=> {
        this.clientservice.getCompteByIdClient(resp.numClient).subscribe(
        (res) => this.Comptes = res) ;}
    )
  }


}
