import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesPageComponent } from './services-page/services-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  { path: 'services', component: ServicesPageComponent,
  canActivate: [AuthGuard]},
  { path: 'home', component: HomePageComponent},
  { path: 'account', component: AccountPageComponent,
  canActivate: [AuthGuard]},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
