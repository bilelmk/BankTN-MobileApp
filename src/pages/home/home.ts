import { Component } from '@angular/core';
import { ConsultationPage } from "../consultation/consultation";
import { ComptePage } from "../compte/compte";
import { ContactPage } from "../contact/contact";
import { VirementPage } from "../virement/virement";
import { BudgetPage } from "../budget/budget";
import {LoginPage} from "../login/login";
import { Storage } from "@ionic/storage";
import {LoadingController, NavController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(private storage : Storage ,
              private  navCtrl : NavController,
              private loadingCtrl : LoadingController){}
  Compte = ComptePage ;
  Consultation = ConsultationPage;
  Contact = ContactPage ;
  Virement = VirementPage;
  Budget = BudgetPage ;

  logOut() {
    const loading = this.loadingCtrl.create({
      content:" Déconnexion . . . . "
    })
    loading.present();
    this.storage.remove('client');
    this.navCtrl.setRoot(LoginPage) ;
    loading.dismiss() ;
  }
}
