import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {FormCriteria} from "../../models/FormCriteria";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  public formData: FormCriteria;

  constructor(private _authService: AuthService,
              private _router: Router) {
  }

  public ngOnInit() {
    this.formData = <FormCriteria> {};
  }

  public onSubmit(form: FormCriteria, reset): void {
    console.log('forget password form data ---<', form);
  }
}
