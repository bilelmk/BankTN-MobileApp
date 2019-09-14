import {Component, ViewChild} from '@angular/core';
import { LoadingController, Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from "@ionic/storage" ;


import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { ConsultationPage } from "../pages/consultation/consultation";
import { ComptePage } from "../pages/compte/compte";
import { ContactPage } from "../pages/contact/contact";
import { VirementPage } from "../pages/virement/virement";
import { BudgetPage } from "../pages/budget/budget";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = LoginPage;
  Compte = ComptePage ;
  Consultation = ConsultationPage;
  Contact = ContactPage ;
  Virement = VirementPage;
  Budget = BudgetPage ;
  Home = HomePage ;

  constructor(platform: Platform, statusBar: StatusBar,
              splashScreen: SplashScreen , private loadingCtrl : LoadingController ,
              private storage : Storage ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  logOut() {
    const loading = this.loadingCtrl.create({
      content:" Déconnexion . . . . "
    })
    loading.present();
    this.storage.remove('client');
    this.nav.setRoot(LoginPage) ;
    loading.dismiss() ;
  }

  openPage(p:any){
    this.nav.setRoot(p) ;
  }
}

