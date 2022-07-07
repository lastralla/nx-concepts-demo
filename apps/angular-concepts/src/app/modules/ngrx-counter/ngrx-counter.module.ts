import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NgrxCounterComponent } from './ngrx-counter.component';


const routes: Routes = [
  { path: '', component: NgrxCounterComponent }
];

@NgModule({
  declarations: [
    NgrxCounterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class NgrxCounterModule { }
