import { DemoMaterialModule } from './../../core/Material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EquipementProtectionRoutingModule } from './equipement-protection-routing.module';
import { EquipementProtectionComponent } from './equipement-protection.component';
import { ProtectionIndividuelleComponent } from './protection-individuelle/protection-individuelle.component';
import { ProtectionCollectiveComponent } from './protection-collective/protection-collective.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [EquipementProtectionComponent, ProtectionIndividuelleComponent, ProtectionCollectiveComponent],
  imports: [
    CommonModule,
    EquipementProtectionRoutingModule,
    DemoMaterialModule,
    NgxSpinnerModule
  ]
})
export class EquipementProtectionModule { }
