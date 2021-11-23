import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeBureauComponent } from './le-bureau/le-bureau.component';
import { LesAntennesComponent } from './les-antennes/les-antennes.component';
import { EmilieComponent } from './emilie/emilie.component';
import { NosMissionsComponent } from './nos-missions/nos-missions.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes: Routes = [

  { path: 'LeBurreau', component: LeBureauComponent },
  { path: 'LesAntennes', component: LesAntennesComponent },
  { path: 'Emilie', component: EmilieComponent },
  { path: 'NosMissions', component: NosMissionsComponent },
  { path: 'Presentation', component: PresentationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociationRoutingModule { }
