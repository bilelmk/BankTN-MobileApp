import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the HistoriquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historique',
  templateUrl: 'historique.html',
})
export class HistoriquePage implements OnInit{

  Historique : any ;

  constructor(public navCtrl: NavController, public navParams: NavParams ,
              private viewCtrl : ViewController) {
  }

  ngOnInit(): void {
    this.Historique = this.navParams.get('historique') ;
  }


  dismiss() {
    this.viewCtrl.dismiss();
  }

}
