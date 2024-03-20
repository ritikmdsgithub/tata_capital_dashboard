import { Component, ViewEncapsulation } from '@angular/core';
import { CorporateAccountApiServiceService } from 'src/app/core/services/corporate_account_api_service/corporate-account-api-service.service';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-corporate-account',
  templateUrl: './corporate-account.component.html',
  styleUrl: './corporate-account.component.css',
})
export class CorporateAccountComponent {
  accountsData: any = {
    "dashboard_name": "",
    "accounts": [
      {
        "id": "",
        "outstanding_limit": "",
        "upcoming_payments": "",
        "due_date": "",
        "company_name": "",
        "overdue_payments": "",
        "overdue_by": ""
      }
    ]
  }

  constructor(private dataService: CorporateAccountApiServiceService) { }

  ngOnInit(): void {
    this.getAccountsData();
  }

  getAccountsData(): void {
    this.dataService.getAccountsData().subscribe(data => {
      this.accountsData = data;
      // console.log('corporate_account_data:', this.dashboardData);
    });
  }


}
