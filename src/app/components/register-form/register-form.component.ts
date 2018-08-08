import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';
import {RegistrationCriteria} from '../../models/FormCriteria';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  public registerData: RegistrationCriteria;
  public successMessage: string;
  public errorMessage: string;
  public register$: Subscription;

  constructor(private _authService: AuthService,
              private _router: Router) {
  }

  public ngOnInit() {
    this.registerData = <RegistrationCriteria> {};
  }

  public onSubmit(form, resetForm): void {
    // this.register$ = this._authService.login(form)
    //   .subscribe((res) => {
    //       this.errorMessage = null;
    //       this.successMessage = res;
    //       this._router.navigate(['/login']);
    //     },
    //     (err) => {
    //       this.successMessage = null;
    //       this.errorMessage = err;
    //     });
    console.log(':Register form Data---<', form);
    this._router.navigate(['/login']);
  }
}
