import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule } from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { IonicStorageModule } from "@ionic/storage";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from "../pages/login/login";
import { ConsultationPage } from "../pages/consultation/consultation";
import { ContactPage } from "../pages/contact/contact";
import { ComptePage } from "../pages/compte/compte";
import { BudgetPage } from "../pages/budget/budget";
import { VirementPage } from "../pages/virement/virement";
import { HistoriquePage } from "../pages/historique/historique";

import { LoginProvider } from '../providers/login/login';
import { ClientProvider } from '../providers/client/client';
import { VirementProvider } from '../providers/virement/virement';
import { OperationsProvider } from '../providers/operations/operations';
import { ModifierMpPage } from "../pages/modifier-mp/modifier-mp";
import { ModifierAdressePage } from "../pages/modifier-adresse/modifier-adresse";
import { DetailsPage } from "../pages/details/details";
import { SoldePage } from "../pages/solde/solde";
import { DerniereOpPage } from "../pages/derniere-op/derniere-op";
import { SuggestionPage } from "../pages/suggestion/suggestion";
import { ReclamationPage } from "../pages/reclamation/reclamation";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ConsultationPage,
    ContactPage,
    ComptePage,
    BudgetPage,
    VirementPage,
    ModifierMpPage,
    ModifierAdressePage,
    DetailsPage,
    SoldePage,
    DerniereOpPage,
    SuggestionPage,
    ReclamationPage,
    HistoriquePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ConsultationPage,
    ContactPage,
    ComptePage,
    BudgetPage,
    VirementPage,
    ModifierMpPage,
    ModifierAdressePage,
    DetailsPage,
    SoldePage,
    DerniereOpPage,
    SuggestionPage,
    ReclamationPage,
    HistoriquePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    ClientProvider,
    VirementProvider,
    OperationsProvider
  ]
})
export class AppModule {}
