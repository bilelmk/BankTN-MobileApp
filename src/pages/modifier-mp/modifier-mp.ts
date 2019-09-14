import {Component, OnInit} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {ClientProvider} from "../../providers/client/client";
import {Client} from "../../classes/client";

/**
 * Generated class for the ModifierMpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modifier-mp',
  templateUrl: 'modifier-mp.html',
})
export class ModifierMpPage implements OnInit{
  amp : string ;
  nmp : string ;
  cmp : string ;
  client : Client = new Client();

  constructor(public navCtrl: NavController, public navParams: NavParams ,
              private storage : Storage ,
              private clientservice : ClientProvider ,
              private toastCtrl : ToastController,
              private loadingCtrl : LoadingController) {
            }


  logForm(form){
    const loading = this.loadingCtrl.create({
      content:"Modification en cours . . . . "
    })
    loading.present() ;
    if(this.amp == this.client.codeSecret ) {
      if (this.cmp == this.nmp) {
        this.client.codeSecret = this.nmp ;
        this.clientservice.patchClient(this.client, this.client.numClient).subscribe(
          (resp) => {
            this.storage.set('client' , this.client)
            let toast = this.toastCtrl.create({message: 'La Modification a été faite avec succès',
            duration: 3000,
            position: 'bottom',
            cssClass : "succes" }) ;
            toast.present() ;
            loading.dismiss() ;
            form.reset();
          },
          (error) => {
            let toast = this.toastCtrl.create({message: 'Une erreur systéme est survenue',
            duration: 3000,
            position: 'bottom',
            cssClass : "fail" }) ;
            toast.present() ;
            loading.dismiss() ;
          }
        )
      }
      else{
        let toast = this.toastCtrl.create({message: 'Verifier votre nouveau mot de passe',
        duration: 3000,
        position: 'bottom',
        cssClass : "fail" }) ;
        toast.present() ;
        loading.dismiss() ;
      }
    }
    else{
      let toast = this.toastCtrl.create({message: 'Verifier votre ancien mot de passe',
      duration: 3000,
      position: 'bottom',
      cssClass : "fail" }) ;
      toast.present() ;
      loading.dismiss() ;
    }
  }



  ngOnInit() {
    this.storage.get('client').then(
      (resp) => {
        this.client = resp
      } )
  }
}
