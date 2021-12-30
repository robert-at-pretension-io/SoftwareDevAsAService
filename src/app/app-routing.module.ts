import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'services', component: ServicesPageComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
