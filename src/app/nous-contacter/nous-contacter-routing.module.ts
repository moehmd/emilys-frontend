import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NousContacterComponent } from './nous-contacter.component';

const routes: Routes = [{ path: '', component: NousContacterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NousContacterRoutingModule { }
