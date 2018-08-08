import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatRippleModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { SampleDirective } from './directives/sample.directive';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app.routing.module';
import {AuthService} from './services/auth.service';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    RegisterFormComponent,
    SampleDirective,
    PageNotFoundComponent,
    ForgetPasswordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
