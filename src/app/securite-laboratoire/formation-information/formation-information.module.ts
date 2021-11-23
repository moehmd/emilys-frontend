import { DemoMaterialModule } from './../../core/Material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormationInformationRoutingModule } from './formation-information-routing.module';
import { FormationInformationComponent } from './formation-information.component';
import { FormationComponent } from './formation/formation.component';
import { InformationComponent } from './information/information.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [FormationInformationComponent, FormationComponent, InformationComponent],
  imports: [
    CommonModule,
    FormationInformationRoutingModule,
    DemoMaterialModule,
    NgxSpinnerModule
  ]
})
export class FormationInformationModule { }
