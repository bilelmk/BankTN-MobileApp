import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ModifierAdressePage} from "../modifier-adresse/modifier-adresse";
import {ModifierMpPage} from "../modifier-mp/modifier-mp";

/**
 * Generated class for the ComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compte',
  templateUrl: 'compte.html',
})
export class ComptePage {

  ModifierAdresse = ModifierAdressePage ;
  MotPasse = ModifierMpPage ;

}
