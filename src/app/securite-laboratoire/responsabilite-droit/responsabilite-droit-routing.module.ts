import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResponsabiliteDroitComponent } from './responsabilite-droit.component';
import { ActeursResponsabiliteComponent } from './acteurs-responsabilite/acteurs-responsabilite.component';
import { DelitsComponent } from './delits/delits.component';
import { NotionResponsabiliteComponent } from './notion-responsabilite/notion-responsabilite.component';

const routes: Routes = [
  { path: '', component: ResponsabiliteDroitComponent },
  { path: 'ActeursResponsabilite', component: ActeursResponsabiliteComponent },
  { path: 'Delits', component: DelitsComponent },
  { path: 'NotionResponsabilite', component: NotionResponsabiliteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResponsabiliteDroitRoutingModule { }
