import { Component, OnInit } from '@angular/core';
import { departmentCollection } from '../models/mocks/department.mock';
import { HttpClient } from '@angular/common/http';
import { Department } from '../models/department.model';
import { Observable } from 'rxjs';
import { DepartmentsService } from '../services/departments.service';

@Component({
  selector: 'app-department-menu',
  templateUrl: './department-menu.component.html',
  styleUrls: ['./department-menu.component.css']
})
export class DepartmentMenuComponent implements OnInit {
  departments?: Department[];
  observableDepartments?: Observable<Department[]>

  // constructor(private httpClient: HttpClient){

  // }

  constructor(private departmentService: DepartmentsService) { }


  ngOnInit(): void {
    // this.httpClient.get<Department[]>('https://localhost:7125/api/Departments')
    //                .subscribe(data => this.departments = data);

    //    this.observableDepartments = this.httpClient.get<Department[]>('https://localhost:7125/api/Departments');

    this.observableDepartments = this.departmentService.getDepartments();
    this.departmentService.getDepartments().subscribe({
      next(response) { console.log(response) },
      error(err) { console.error('Error: ' + err); },
      complete() {
        console.log('Completed');
       
      }
    })

  }



}
