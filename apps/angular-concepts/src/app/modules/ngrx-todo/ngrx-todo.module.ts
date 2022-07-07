import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgrxTodoComponent } from './ngrx-todo.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: NgrxTodoComponent }
];

@NgModule({
  declarations: [
    NgrxTodoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class NgrxTodoModule { }
