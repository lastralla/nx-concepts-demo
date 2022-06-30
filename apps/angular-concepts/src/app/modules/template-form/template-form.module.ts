import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { ValidateUsernameDirective } from '../../directives/validate-username.directive';
import { MustMatchDirective } from '../../directives/must-match.directive';


const routes: Routes = [
  { path: '', component: TemplateFormComponent }
];

@NgModule({
  declarations: [
    TemplateFormComponent,
    MustMatchDirective,
    ValidateUsernameDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class TemplateFormModule { }
