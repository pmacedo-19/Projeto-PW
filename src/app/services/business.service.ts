import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http:HttpClient) { }

  getAllBusinesses(){
    return this.http.get('src/data/properties.json')
  }
}
