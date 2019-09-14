import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ReclamationPage} from "../reclamation/reclamation";
import {SuggestionPage} from "../suggestion/suggestion";

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  Reclamation  = ReclamationPage ;
  Suggestion = SuggestionPage ;

}
