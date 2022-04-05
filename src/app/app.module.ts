import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CapitalPipe } from './common/pipes/capital.pipe';
import { LanguagePipe } from './common/pipes/language.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CountryListComponent,
    CapitalPipe,
    LanguagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
