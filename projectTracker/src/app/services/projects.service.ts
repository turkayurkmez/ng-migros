import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  url: string = 'https://localhost:7125/api/projects';


  constructor(private httpClient: HttpClient) { }

  getProjects(): Observable<Project[]> {

    return this.httpClient.get<Project[]>(this.url)
      .pipe(catchError((err: HttpErrorResponse) => {
        return throwError(() => new Error(err.statusText))
      }));

  }
}
