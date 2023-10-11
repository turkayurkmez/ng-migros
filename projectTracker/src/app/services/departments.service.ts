import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Department } from '../models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  url: string = 'https://localhost:7125/api/Departments';
  constructor(private httpClient: HttpClient) { }

  getDepartments(): Observable<Department[]> {
    return this.httpClient.get<Department[]>(this.url)
      .pipe(catchError((err: HttpErrorResponse) => {
        console.log(err.message);
        return throwError(() => new Error(err.statusText))
      }));
  }

  createDepartment(department: Department): Observable<Department> {

    let option = {
      headers: new HttpHeaders({
        'Authentication': 'Bearer [TOKEN]'
      })
    }
    return this.httpClient.post(this.url, department, option)
      .pipe(catchError((err: HttpErrorResponse) => {
        return throwError(() => new Error(err.statusText))
      }))


  }


}
