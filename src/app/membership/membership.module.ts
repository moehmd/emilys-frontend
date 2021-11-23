import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembershipRoutingModule } from './membership-routing.module';
import { MembershipComponent } from './membership.component';
import { MemberhsipDialogComponent } from './memberhsip-dialog/memberhsip-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MembershipComponent, MemberhsipDialogComponent],
  imports: [
    CommonModule,
    MembershipRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MembershipModule { }
