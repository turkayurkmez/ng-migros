import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { DepartmentMenuComponent } from './department-menu/department-menu.component';
import { AddDepartmentComponent } from './add-department/add-department.component';

const routes: Routes = [
  {path:'',component:ProjectListComponent},
  {path:'allProjects',component:ProjectListComponent},
  {path:'departments', component:DepartmentMenuComponent},
  {path:'projects/department/:id', component:ProjectListComponent},
  {path:'addDepartment',component:AddDepartmentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
