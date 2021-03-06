import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home/home.component';
import { counterReducer, todoReducer } from './store/store.reducer';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      count: counterReducer,
      todos: todoReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    RouterModule.forRoot(
      [
        {
          path: '',
          component: HomeComponent,
        },
        {
          path: 'simple-service',
          loadComponent: () => import('./modules/simple-service/simple-service.component').then(c => c.SimpleServiceComponent),
          title: 'Simple Service Example',
        },
        {
          path: 'api-requests',
          loadComponent: () => import('./modules/api-requests/api-requests.component').then(c => c.ApiRequestsComponent),
          title: 'Api Request Examples',
        },
        {
          path: 'reactive-form',
          loadChildren: () => import('./modules/reactive-form/reactive-form.module').then(m => m.ReactiveFormModule),
          title: 'Reactive Forms',
        },
        {
          path: 'template-form',
          loadChildren: () => import('./modules/template-form/template-form.module').then(m => m.TemplateFormModule),
          title: 'Template Forms',
        },
        {
          path: 'ngrx-counter',
          loadChildren: () => import('./modules/ngrx-counter/ngrx-counter.module').then(m => m.NgrxCounterModule),
          title: 'NGRX Counter Example',
        },
        {
          path: 'ngrx-todo',
          loadChildren: () => import('./modules/ngrx-todo/ngrx-todo.module').then(m => m.NgrxTodoModule),
          title: 'NGRX Todo Example',
        },
        {
          path: 'material-table',
          loadChildren: () => import('./modules/material-table/material-table.module').then(m => m.MaterialTableModule),
        }
      ],
      // { initialNavigation: 'enabledBlocking' }
    ),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
