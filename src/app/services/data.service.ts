import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  smallerDataSetUrl = 'https://api.myjson.com/bins/15psn9';
  lagerDataSetUrl = 'https://api.myjson.com/bins/ly7d1';

  rowData: any[] = [
    {make: 'Toyota', model: 'Prado', price: 50000 },
    {make: 'Kia', model: 'Stinger', price: 60000 },
    {make: 'Hyundai', model: 'Santa Fe', price: 65000 },
    {make: 'Toyota', model: 'Yaris', price: 24000 }

  ];
  constructor(private http: HttpClient) { }

  getData() {
    // return of(this.rowData);
    return this.http.get(this.lagerDataSetUrl);
  }
}
