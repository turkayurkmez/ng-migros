import { Component } from '@angular/core';
import { Department } from '../models/department.model';
import { NgForm } from '@angular/forms';
import { DepartmentsService } from '../services/departments.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent {
  department: Department = new Department();

  constructor(private departmentService: DepartmentsService ){}

  submit(form:NgForm){
    if (form.valid) {
      console.log('form değeri: ',form.value);
      console.log('departman',this.department);
      this.department = form.value;
      this.departmentService.createDepartment(this.department)
                            .subscribe(data=>console.log('Kaydedildi',data));
    }
  }
}
