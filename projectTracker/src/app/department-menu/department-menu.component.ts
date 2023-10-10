import { Component } from '@angular/core';
import { departmentCollection } from '../models/mocks/department.mock';

@Component({
  selector: 'app-department-menu',
  templateUrl: './department-menu.component.html',
  styleUrls: ['./department-menu.component.css']
})
export class DepartmentMenuComponent {
  departments = departmentCollection

}
