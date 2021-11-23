import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { EmilieComponent } from '../association/emilie/emilie.component';
import { NosMissionsComponent } from '../association/nos-missions/nos-missions.component';

const routes: Routes =
[
  { path: '', component: HomeComponent },
  {path: 'Emilie', component: EmilieComponent},
  {path: 'NosMissions', component: NosMissionsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
