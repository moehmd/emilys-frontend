import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SecuriteLaboratoireComponent } from './securite-laboratoire.component';

const routes: Routes = [{ path: '', component: SecuriteLaboratoireComponent },
{ path: 'RisquePrevention', loadChildren: () => import('./risque-prevention/risque-prevention.module').then(m => m.RisquePreventionModule) },
{ path: 'LienUtile', loadChildren: () => import('./lien-utile/lien-utile.module').then(m => m.LienUtileModule) },
{ path: 'AccidentMaladie', loadChildren: () => import('./accident-maladie/accident-maladie.module').then(m => m.AccidentMaladieModule) },
{ path: 'EquipementProtection', loadChildren: () => import('./equipement-protection/equipement-protection.module').then(m => m.EquipementProtectionModule) },
{ path: 'FormationInformation', loadChildren: () => import('./formation-information/formation-information.module').then(m => m.FormationInformationModule) },
{ path: 'ReponsabiliteDroit', loadChildren: () => import('./responsabilite-droit/responsabilite-droit.module').then(m => m.ResponsabiliteDroitModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecuriteLaboratoireRoutingModule { }
