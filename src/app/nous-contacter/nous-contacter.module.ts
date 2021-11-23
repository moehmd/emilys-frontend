import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NousContacterRoutingModule } from './nous-contacter-routing.module';
import { NousContacterComponent } from './nous-contacter.component';
import { NousContacterDialogComponent } from './nous-contacter-dialog/nous-contacter-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [NousContacterComponent, NousContacterDialogComponent],
  imports: [
    CommonModule,
    NousContacterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NousContacterModule { }
