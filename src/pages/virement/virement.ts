import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Client} from "../../classes/client";
import { Storage } from "@ionic/storage";
import {ClientProvider} from "../../providers/client/client";
import {OperationsProvider} from "../../providers/operations/operations";
import {TransactonVirement} from "../../classes/transactonVirement";
import {Compte} from "../../classes/compte";
import {Operationvirement} from "../../classes/operationvirement";

/**
 * Generated class for the VirementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-virement',
  templateUrl: 'virement.html',
})
export class VirementPage implements OnInit {

  Comptes : Compte[] ;

  data : TransactonVirement = new TransactonVirement() ;
  constructor(public navCtrl: NavController,
              public navParams: NavParams ,
              private storage : Storage ,
              private clientservice : ClientProvider ,
              private operationservice : OperationsProvider,
              private toastCtrl : ToastController,
              private loadingCtrl : LoadingController) {
  }


  ngOnInit(){
      this.storage.get('client').then(
        (resp)=> {
          this.clientservice.getCompteByIdClient(resp.numClient).subscribe(
            (res) => this.Comptes = res) ;})
    }

  ID(){
    return (new Date().getTime() + Math.floor((Math.random()*10000)+1))
  }

  logForm(form){
    const loading = this.loadingCtrl.create({
        content:" Virement en cours . . . . "
    })
    loading.present() ;

    var opvirement : Operationvirement = new Operationvirement() ;
    opvirement.date = new Date() ;
    opvirement.numCompteTrans = form.value.compte ;
    opvirement.numCompteRec = form.value.beneficiare ;
    opvirement.codeTransactionVirement = this.ID();
    opvirement.montant = form.value.montant ;
    this.operationservice.postTransactionVirement(opvirement).subscribe() ;

    var data : TransactonVirement = new TransactonVirement() ;
    data.montant = form.value.montant ;
    data.numCompte1 = form.value.compte ;
    data.numCompte2 = form.value.beneficiare ;

    this.operationservice.virer(data).subscribe(
      (resp) => {
        let toast = this.toastCtrl.create({message: 'Le virement a été fait avec succès',
          duration: 3000,
          position: 'bottom',
          cssClass : "succes" }) ;
        toast.present() ;
        loading.dismiss() ;
        form.reset();

      } ,
      (error) => {
        if(error.status == 304){
          let toast = this.toastCtrl.create({message: 'Votre solde est insuffisant',
            duration: 3000,
            position: 'bottom',
            cssClass : "fail" }) ;
          toast.present() ;
          loading.dismiss() ;
        }
        else {
          let toast = this.toastCtrl.create({message: 'Compte bénéficiaire inexistant',
            duration: 3000,
            position: 'bottom',
            cssClass : "fail" }) ;
          toast.present() ;
          loading.dismiss() ;
        }
      }
    )

  }

}
