import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonationsRoutingModule } from './donations-routing.module';
import { DonationsComponent } from './donations.component';
import { DonationClaculationComponent } from './donation-claculation/donation-claculation.component';
import { DonationDialogComponent } from './donation-dialog/donation-dialog.component';
import { DemoMaterialModule } from '../core/Material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [DonationsComponent, DonationClaculationComponent, DonationDialogComponent],
  imports: [
    CommonModule,
    DonationsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ]
})
export class DonationsModule { }
