import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuriteLaboratoireRoutingModule } from './securite-laboratoire-routing.module';
import { SecuriteLaboratoireComponent } from './securite-laboratoire.component';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [SecuriteLaboratoireComponent],
  imports: [
    CommonModule,
    SecuriteLaboratoireRoutingModule,
    NgxSpinnerModule
  ]
})
export class SecuriteLaboratoireModule { }
