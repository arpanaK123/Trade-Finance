import {NgModule} from '@angular/core';
import {APP_ROUTES} from './app.routes';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: []
})

export class AppRoutingModule {

}
