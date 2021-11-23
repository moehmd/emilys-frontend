import { DemoMaterialModule } from './../../core/Material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RisquePreventionRoutingModule } from './risque-prevention-routing.module';
import { RisquePreventionComponent } from './risque-prevention.component';
import { RisqueBiologiqueComponent } from './risque-biologique/risque-biologique.component';
import { RisqueChimiqueComponent } from './risque-chimique/risque-chimique.component';
import { RisquePhysiqueComponent } from './risque-physique/risque-physique.component';
import { RisqueRadioactifComponent } from './risque-radioactif/risque-radioactif.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [RisquePreventionComponent, RisqueBiologiqueComponent, RisqueChimiqueComponent, RisquePhysiqueComponent, RisqueRadioactifComponent],
  imports: [
    CommonModule,
    RisquePreventionRoutingModule,
    DemoMaterialModule,
    NgxSpinnerModule
  ]
})
export class RisquePreventionModule { }
