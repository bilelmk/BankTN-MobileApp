import {Component, OnInit} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {Operationsimple} from "../../classes/operationsimple";
import {Operationvirement} from "../../classes/operationvirement";
import {OperationsProvider} from "../../providers/operations/operations";
import {Storage} from "@ionic/storage";
import {ClientProvider} from "../../providers/client/client";
import {Compte} from "../../classes/compte";
import {HistoriquePage} from "../historique/historique";

/**
 * Generated class for the DerniereOpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-derniere-op',
  templateUrl: 'derniere-op.html',
})
export class DerniereOpPage implements OnInit{

  Historique : any[] ;
  Comptes : Compte[] ;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private opertaionservice : OperationsProvider,private storage : Storage ,
              private clientservice : ClientProvider , private modalCtrl: ModalController) {
  }

  ngOnInit(): void {
    this.storage.get('client').then(
      (resp)=> {
        this.clientservice.getCompteByIdClient(resp.numClient).subscribe(
          (res) => this.Comptes = res) ;}
    )
  }


  getHistorique(cpt : any){
    this.Historique = new Array() ;
    var tv : Operationvirement[] ;
    var ts : Operationsimple[] ;
    this.opertaionservice.getTransactionStandard(cpt).subscribe(
      (res) => {ts = res ;
      console.log(ts);
        this.opertaionservice.getTransactionvirement(cpt).subscribe(
          (res) => { tv = res ;
          console.log(tv);
            this.trier(ts ,tv);
          console.log(this.Historique)} ) ;
      }) ;


    const modal = this.modalCtrl.create(HistoriquePage ,{historique : this.Historique} );
    modal.present();



  }


  trier(TS :Operationsimple[] , TV: Operationvirement[] ){

    for( var ts in TS ){this.Historique.push(TS[ts])}
    for( var tv in TV ){this.Historique.push(TV[tv])}
    this.Historique.sort((a, b) => {
      if(a.date > b.date) {
        return -1 }
      else{
        return 1
      }
    })
  }






}
