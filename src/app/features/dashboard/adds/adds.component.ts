import { Component } from '@angular/core';
import { CorporateAccountApiServiceService } from 'src/app/core/services/corporate_account_api_service/corporate-account-api-service.service';


@Component({
  selector: 'app-adds',
  templateUrl: './adds.component.html',
  styleUrl: './adds.component.css'
})

export class AddsComponent {
  addsData: any = {
    "adds":[
      {
          "heading":"",
          "text":"",
          "image":"",
          "button":""
      }
    ]
  }

  constructor(private dataService: CorporateAccountApiServiceService) { }

  ngOnInit(): void {
    this.getAddsData();
  }

  getAddsData(): void {
    this.dataService.getAddsData().subscribe(data => {
      this.addsData = data;
    });
  }
}
