import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  { path: '', redirectTo: 'LoginModule/en/loginpage', pathMatch: 'full' },
  { path: 'HomeModule/en/homepage', component: MainComponent },
  { path: 'LoginModule/en/loginpage', component: LoginComponent },
  { path: '**', redirectTo: 'LoginModule/en/loginpage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
