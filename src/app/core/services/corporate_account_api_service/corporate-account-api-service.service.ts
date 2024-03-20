import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorporateAccountApiServiceService {

  private jsonUrl = '../../../../assets/accounts_data.json';
  private addsUrl = '../../../../assets/adds_data.json'
  
  constructor(private http: HttpClient) { }

  getAddsData(): Observable<any> {
    return this.http.get<any>(this.addsUrl)
  }
  getAccountsData(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
