import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonationClaculationComponent } from './donation-claculation/donation-claculation.component';
import { DonationDialogComponent } from './donation-dialog/donation-dialog.component';

import { DonationsComponent } from './donations.component';

const routes: Routes = [{ path: '', component: DonationsComponent },
{path: 'calc', component: DonationClaculationComponent},
{path:'DesDons', component: DonationDialogComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DonationsRoutingModule { }
