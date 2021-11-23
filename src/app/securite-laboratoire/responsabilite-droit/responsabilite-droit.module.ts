import { DemoMaterialModule } from './../../core/Material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsabiliteDroitRoutingModule } from './responsabilite-droit-routing.module';
import { ResponsabiliteDroitComponent } from './responsabilite-droit.component';
import { NotionResponsabiliteComponent } from './notion-responsabilite/notion-responsabilite.component';
import { DelitsComponent } from './delits/delits.component';
import { ActeursResponsabiliteComponent } from './acteurs-responsabilite/acteurs-responsabilite.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [ResponsabiliteDroitComponent, NotionResponsabiliteComponent, DelitsComponent, ActeursResponsabiliteComponent],
  imports: [
    CommonModule,
    ResponsabiliteDroitRoutingModule,
    DemoMaterialModule,
    NgxSpinnerModule
  ]
})
export class ResponsabiliteDroitModule { }
