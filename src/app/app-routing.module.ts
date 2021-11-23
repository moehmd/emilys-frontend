import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopyrightsComponent } from './components/front/copyrights/copyrights.component';


const routes: Routes = [
  { path: '', redirectTo: 'Accueil', pathMatch: "full" },
  {path: 'MentionsLégales/RGPD', component: CopyrightsComponent},
  { path: 'Accueil', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'Association', loadChildren: () => import('./association/association.module').then(m => m.AssociationModule) },
  { path: 'SecuriteLaboratoire', loadChildren: () => import('./securite-laboratoire/securite-laboratoire.module').then(m => m.SecuriteLaboratoireModule) },
  { path: 'ActualiteActivite', loadChildren: () => import('./actualite-activite/actualite-activite.module').then(m => m.ActualiteActiviteModule) },
  { path: 'nous-contacter', loadChildren: () => import('./nous-contacter/nous-contacter.module').then(m => m.NousContacterModule) },
  { path: 'donations', loadChildren: () => import('./donations/donations.module').then(m => m.DonationsModule) },
  { path: 'member', loadChildren: () => import('./membership/membership.module').then(m => m.MembershipModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
