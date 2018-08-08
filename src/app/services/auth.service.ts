import {Injectable} from '@angular/core';
import {FormCriteria} from '../models/FormCriteria';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AuthService {
  private validationMessage = {
    success: 'You are successfully logged In',
    error: 'Authentication Problem.'
  };

  constructor() {
  }

  public login(data: FormCriteria): Observable<any> {
    if (data.email) {
      return Observable.of(this.validationMessage.success);
    }
    return Observable.throw(this.validationMessage.error);
  }
}
