import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {ClientProvider} from "../../providers/client/client";
import {Adresse} from "../../classes/adresse";

/**
 * Generated class for the ModifierAdressePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifier-adresse',
  templateUrl: 'modifier-adresse.html',
})
export class ModifierAdressePage implements  OnInit{
  adresse : Adresse = new Adresse() ;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private storage :Storage,
              private clientservice : ClientProvider,
              private toastCtrl : ToastController,
              private loadingCtrl : LoadingController) {}

  ngOnInit() {
    this.storage.get('client').then(
      (resp) =>{
        this.clientservice.getAdresseByClientId(resp.numClient).subscribe(
          (res) => this.adresse = res
        ) ;
      }
    )
  }

  logForm(){
    const loading = this.loadingCtrl.create({
      content:"Modification en cours . . . . "
    })
    loading.present() ;

    this.clientservice.patchAdresse(this.adresse,this.adresse.numClient).subscribe(
      (resp) =>  {
        let toast = this.toastCtrl.create({message: 'La Modification a été faite avec succès',
          duration: 3000,
          position: 'bottom',
          cssClass : "succes" }) ;
          toast.present() ;
          loading.dismiss() ;
      },
      (error) => {
        let toast = this.toastCtrl.create({message: 'Une erreur systéme est survenue',
          duration: 3000,
          position: 'bottom',
          cssClass : "fail" }) ;
          toast.present() ;
          loading.dismiss() ;
      }
    );
  }

}
