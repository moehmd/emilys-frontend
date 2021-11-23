import { DemoMaterialModule } from './../../core/Material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccidentMaladieRoutingModule } from './accident-maladie-routing.module';
import { AccidentMaladieComponent } from './accident-maladie.component';
import { AccidentTravailComponent } from './accident-travail/accident-travail.component';
import { MaladieProffessionelleComponent } from './maladie-proffessionelle/maladie-proffessionelle.component';
import { FauteInexcusableComponent } from './faute-inexcusable/faute-inexcusable.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [AccidentMaladieComponent, AccidentTravailComponent, MaladieProffessionelleComponent, FauteInexcusableComponent],
  imports: [
    CommonModule,
    AccidentMaladieRoutingModule,
    DemoMaterialModule,
    NgxSpinnerModule
  ]
})
export class AccidentMaladieModule { }
