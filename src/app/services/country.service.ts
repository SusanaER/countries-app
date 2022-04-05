import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CountryModel } from '../common/models/country.model';
import { HttpClient } from '@angular/common/http'
import { environment as e } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  public getCountries(): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>(e.ALL_COUNTRIES_URL).pipe(
      map((items: any[]) => items.map((item: any) => {
        return {
          name: item.name.official, 
          capital: item.capital, 
          region: item.region, 
          languages: !!item.languages ? Object.values(item.languages) : [],
          population: item.population, 
          flag: item.flag
        };
      }))
    );
  }
}
