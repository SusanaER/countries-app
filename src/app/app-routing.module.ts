import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { CountryListComponent } from './pages/country-list/country-list.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/countries'},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'countries', component: CountryListComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/countries'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
