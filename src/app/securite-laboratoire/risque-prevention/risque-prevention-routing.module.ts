import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RisquePreventionComponent } from './risque-prevention.component';
import { RisqueChimiqueComponent } from './risque-chimique/risque-chimique.component';
import { RisqueBiologiqueComponent } from './risque-biologique/risque-biologique.component';
import { RisquePhysiqueComponent } from './risque-physique/risque-physique.component';
import { RisqueRadioactifComponent } from './risque-radioactif/risque-radioactif.component';

const routes: Routes = [
  { path: '', component: RisquePreventionComponent },
  {path: 'RisqueChimique', component: RisqueChimiqueComponent},
  {path: 'RisqueBiologique', component: RisqueBiologiqueComponent},
  {path: 'RisquePhysique', component: RisquePhysiqueComponent},
  {path: 'RisqueRadioActif', component: RisqueRadioactifComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RisquePreventionRoutingModule { }
