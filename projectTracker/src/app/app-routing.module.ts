import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { DepartmentMenuComponent } from './department-menu/department-menu.component';

const routes: Routes = [
  {path:'',component:ProjectListComponent},
  {path:'allProjects',component:ProjectListComponent},
  {path:'departments', component:DepartmentMenuComponent},
  {path:'projects/department/:id', component:ProjectListComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
