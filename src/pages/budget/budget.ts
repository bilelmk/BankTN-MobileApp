import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ClientProvider} from "../../providers/client/client";

/**
 * Generated class for the BudgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-budget',
  templateUrl: 'budget.html',
})
export class BudgetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private clientservice : ClientProvider) {
  }

  test(){
    this.clientservice.getClients().subscribe(
      (resp) => console.log(resp)
    )
  }

}
