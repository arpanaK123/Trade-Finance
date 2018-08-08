import {Component, OnInit} from '@angular/core';
import {FormCriteria} from '../../models/FormCriteria';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public signInForm: FormCriteria;
  public loggedInMessage: string;
  public loggedInError: string;
  public login$: Subscription;

  constructor(private _authService: AuthService,
              private _router: Router) {
  }

  public ngOnInit() {
    this.signInForm = <FormCriteria> {};
  }

  public onSubmit(form): void {
    this.login$ = this._authService.login(form)
      .subscribe((res) => {
          this.loggedInError = null;
          this.loggedInMessage = res;
          this._router.navigate(['/dashboard']);
        },
        (err) => {
          this.loggedInMessage = null;
          this.loggedInError = err;
        });
  }
}
