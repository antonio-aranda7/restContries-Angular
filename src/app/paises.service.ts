import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class paisesService {

  vinculo: string = "https://restcountries.eu/rest/v2";

  constructor(private api: HttpClient) {}

  getAfrica(){
    return this.api.get(`${this.vinculo}/region/africa`)
  }

  getAmerica(){
    return this.api.get(`${this.vinculo}/region/americas`)
  }

  getAsia(){
    return this.api.get(`${this.vinculo}/region/asia`)
  }

  getCountries(){
    return this.api.get(`${this.vinculo}/all`)
  }
  
  getCountry(id){
    return this.api.get(`${this.vinculo}/alpha?codes=${id}`);
  }
  
  getEuropa(){
    return this.api.get(`${this.vinculo}/region/europe`)
  }

  getOceania(){
    return this.api.get(`${this.vinculo}/region/oceania`)
  }
  
}
