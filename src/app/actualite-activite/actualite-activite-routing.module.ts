import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualiteActiviteComponent } from './actualite-activite.component';
import { ActualitesComponent } from './actualites/actualites.component';

const routes: Routes = [{ path: '', component: ActualiteActiviteComponent},
{path: 'actualite', component: ActualitesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActualiteActiviteRoutingModule { }
