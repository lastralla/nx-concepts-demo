import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'reactive-form',
          loadChildren: () => import('./modules/reactive-form/reactive-form.module').then(m => m.ReactiveFormModule)
        },
        {
          path: 'template-form',
          loadChildren: () => import('./modules/template-form/template-form.module').then(m => m.TemplateFormModule)
        }
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
