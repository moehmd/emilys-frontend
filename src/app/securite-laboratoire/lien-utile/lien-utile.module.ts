import { DemoMaterialModule } from './../../core/Material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LienUtileRoutingModule } from './lien-utile-routing.module';
import { LienUtileComponent } from './lien-utile.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [LienUtileComponent],
  imports: [
    CommonModule,
    LienUtileRoutingModule,
    DemoMaterialModule,
    NgxSpinnerModule
  ]
})
export class LienUtileModule { }
