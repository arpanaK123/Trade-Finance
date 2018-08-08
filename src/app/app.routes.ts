import {Routes} from '@angular/router';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {RegisterFormComponent} from './components/register-form/register-form.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {ForgetPasswordComponent} from './components/forget-password/forget-password.component';

export const APP_ROUTES: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
  }, {
    path: 'register',
    component: RegisterFormComponent,
  }, {
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'forget-password',
    component: ForgetPasswordComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]

