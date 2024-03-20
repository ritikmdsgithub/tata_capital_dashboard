import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateAccountComponent } from './corporate-account/corporate-account.component';
import { OverduePaymentsComponent } from './overdue-payments/overdue-payments.component';
import { UpcomingPaymentsComponent } from './upcoming-payments/upcoming-payments.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { LimitOverviewComponent } from './limit-overview/limit-overview.component';
import { AddsComponent } from './adds/adds.component';
import { ListComponent } from './list/list.component';
import { AccountListComponent } from './account-list/account-list.component';


@NgModule({
  declarations: [
    LimitOverviewComponent,
    OverduePaymentsComponent,
    CorporateAccountComponent,
    OverduePaymentsComponent,
    UpcomingPaymentsComponent,
    AddsComponent,
    ListComponent,
    AccountListComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  exports: [CorporateAccountComponent]
})
export class DashboardModule { }
