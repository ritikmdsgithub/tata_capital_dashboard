import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorporateAccountComponent } from './features/dashboard/corporate-account/corporate-account.component';

const routes: Routes = [
 
  // Add routes for all feature components
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'approverequest', loadChildren: () => import('./features/approve-request/approve-request.module').then(m => m.ApproveRequestModule) },
  { path: 'servicerequest', loadChildren: () => import('./features/service-request/service-request.module').then(m => m.ServiceRequestModule) },
  { path: 'trackapplication', loadChildren: () => import('./features/transact/transact.module').then(m => m.TransactModule) },
  { path: 'transact', loadChildren: () => import('./features/track-application/track-application.module').then(m => m.TrackApplicationModule) },
  

  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
