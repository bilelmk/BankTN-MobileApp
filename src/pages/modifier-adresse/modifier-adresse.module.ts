import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModifierAdressePage } from './modifier-adresse';

@NgModule({
  declarations: [
    ModifierAdressePage,
  ],
  imports: [
    IonicPageModule.forChild(ModifierAdressePage),
  ],
})
export class ModifierAdressePageModule {}
