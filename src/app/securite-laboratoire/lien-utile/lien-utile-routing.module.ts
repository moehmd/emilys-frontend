import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LienUtileComponent } from './lien-utile.component';

const routes: Routes = [
  { path: '', component: LienUtileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LienUtileRoutingModule { }
