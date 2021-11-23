import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActualiteActiviteRoutingModule } from './actualite-activite-routing.module';
import { ActualiteActiviteComponent } from './actualite-activite.component';
import { ActualitesComponent } from './actualites/actualites.component';
import { ActivitesComponent } from './activites/activites.component';


@NgModule({
  declarations: [ActualiteActiviteComponent, ActualitesComponent, ActivitesComponent],
  imports: [
    CommonModule,
    ActualiteActiviteRoutingModule
  ],

})
export class ActualiteActiviteModule { }
