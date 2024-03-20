import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { StickyComponent } from './shared/components/sticky/sticky.component';
import { HttpClientModule } from '@angular/common/http';
import { OverduePaymentsComponent } from './features/dashboard/overdue-payments/overdue-payments.component';
import { CorporateAccountComponent } from './features/dashboard/corporate-account/corporate-account.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    StickyComponent,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
