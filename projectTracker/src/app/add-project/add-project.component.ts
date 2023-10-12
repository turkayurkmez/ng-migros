import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentsService } from '../services/departments.service';
import { Department } from '../models/department.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {



  addProjectForm: FormGroup
  departments: Observable<Department[]>;


  constructor(private formBuilder: FormBuilder, 
              private departmentService: DepartmentsService) { }


  ngOnInit(): void {

    this.addProjectForm = this.formBuilder.group({
      name: ['', [Validators.required,
                  Validators.minLength(3)
      ]],
      description: ['', Validators.required],
      departmentId: ['', Validators.required]

    });

    this.departments = this.departmentService.getDepartments();


  }

  checkNameRequired():boolean | undefined{
    let control = this.addProjectForm.get('name');
    return control?.hasError('required') && control?.dirty;
  }

  checkNameLength():boolean | undefined{
    let control = this.addProjectForm.get('name');
    console.log('has minlength', control?.hasError('minlength'))
    return control?.hasError('minlength') && control?.invalid;

  }

  checkDescription():boolean | undefined{
    let control = this.addProjectForm.get('description');
    return control?.hasError('required') && control?.dirty;
  }

  checkDepartment():boolean | undefined{
    let control = this.addProjectForm.get('departmentId');
    return control?.hasError('required') && control?.untouched;
  }

  addProject(){
    if (this.addProjectForm.valid) {
      console.log('proje bilgisi:', this.addProjectForm.value)
      console.table(this.addProjectForm.value);
    }
  }
}
