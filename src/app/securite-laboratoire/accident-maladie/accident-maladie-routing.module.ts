import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccidentMaladieComponent } from './accident-maladie.component';
import { MaladieProffessionelleComponent } from './maladie-proffessionelle/maladie-proffessionelle.component';
import { AccidentTravailComponent } from './accident-travail/accident-travail.component';
import { FauteInexcusableComponent } from './faute-inexcusable/faute-inexcusable.component';

const routes: Routes = [
  { path: '', component: AccidentMaladieComponent },
  { path: 'MaladieProffessionelle', component: MaladieProffessionelleComponent },
  { path: 'AccidentTravail', component: AccidentTravailComponent },
  { path: 'FauteInexcusable', component: FauteInexcusableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccidentMaladieRoutingModule { }
