import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MaterialTableComponent } from './material-table.component';
import { MaterialDataService } from '../../services/materia-data.service';


const routes: Routes = [
  { path: '', component: MaterialTableComponent }
];

@NgModule({
  declarations: [
    MaterialTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    MaterialDataService
  ]
})
export class MaterialTableModule { }
