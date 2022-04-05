import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CountryService } from 'src/app/services/country.service';
import { CountryModel } from 'src/app/common/models/country.model';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit, OnDestroy {
  countrySubs!: Subscription;
  countries: CountryModel[] = [];

  constructor(private countryService: CountryService) { }
  
  ngOnInit(): void {
    this.countrySubs = this.countryService.getCountries().subscribe(
      (countries: CountryModel[]) => {
        this.countries = countries;
      }
    )
  }

  ngOnDestroy(): void {
    this.countrySubs.unsubscribe();
  }
}
