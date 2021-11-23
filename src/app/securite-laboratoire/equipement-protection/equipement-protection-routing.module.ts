import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipementProtectionComponent } from './equipement-protection.component';
import { ProtectionIndividuelleComponent } from './protection-individuelle/protection-individuelle.component';
import { ProtectionCollectiveComponent } from './protection-collective/protection-collective.component';

const routes: Routes = [
  { path: '', component: EquipementProtectionComponent },
  { path: 'ProtectionIndividuelle', component: ProtectionIndividuelleComponent },
  { path: 'ProtectionCollective', component: ProtectionCollectiveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipementProtectionRoutingModule { }
