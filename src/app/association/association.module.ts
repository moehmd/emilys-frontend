import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociationRoutingModule } from './association-routing.module';
import { AssociationComponent } from './association.component';
import { LeBureauComponent } from './le-bureau/le-bureau.component';
import { EmilieComponent } from './emilie/emilie.component';
import { LesAntennesComponent } from './les-antennes/les-antennes.component';
import { NosMissionsComponent } from './nos-missions/nos-missions.component';
import { PresentationComponent } from './presentation/presentation.component';
import { DemoMaterialModule } from '../core/Material/material.module';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    AssociationComponent,
    LeBureauComponent,
    EmilieComponent,
    LesAntennesComponent,
    NosMissionsComponent,
    PresentationComponent
  ],
  imports: [
    CommonModule,
    AssociationRoutingModule,
    DemoMaterialModule,
    NgxSpinnerModule
  ]
})
export class AssociationModule { }
