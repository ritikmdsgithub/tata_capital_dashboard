import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorporateAccountComponent } from './corporate-account/corporate-account.component';

const routes: Routes = [
  
  { path:'', redirectTo:'corporateaccount', pathMatch:'full'},
  { path:'corporateaccount', component:CorporateAccountComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
