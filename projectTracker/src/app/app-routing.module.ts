import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { DepartmentMenuComponent } from './department-menu/department-menu.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { LoginGuard } from './login/login.guard';
import { LoginComponent } from './login/login.component';
import { UserService, canActivateUser } from './services/user.service'

const routes: Routes = [
  {path:'',component:ProjectListComponent},
  {path:'allProjects',component:ProjectListComponent},
  {path:'departments', component:DepartmentMenuComponent},
  {path:'projects/department/:id', component:ProjectListComponent},
  {path:'addDepartment',component:AddDepartmentComponent,canActivate:[LoginGuard]},
  {path:'addProject',component:AddProjectComponent,canActivate:[LoginGuard]},
  //{path:'addProject',component:AddProjectComponent, canActivate:[canActivateUser]},
  {path:'login',component:LoginComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
