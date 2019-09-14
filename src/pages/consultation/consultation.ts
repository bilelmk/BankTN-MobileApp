import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import {SoldePage} from "../solde/solde";
import {DerniereOpPage} from "../derniere-op/derniere-op";
import {DetailsPage} from "../details/details";
/**
 * Generated class for the ConsultationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consultation',
  templateUrl: 'consultation.html',
})
export class ConsultationPage {
  Details = DetailsPage;
  Comptes = SoldePage ;
  DerOp = DerniereOpPage;

}
