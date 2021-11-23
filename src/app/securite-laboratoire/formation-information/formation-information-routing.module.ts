import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormationInformationComponent } from './formation-information.component';
import { FormationComponent } from './formation/formation.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [
  { path: '', component: FormationInformationComponent },
  { path: 'Formation', component: FormationComponent },
  { path: 'Information', component: InformationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormationInformationRoutingModule { }
