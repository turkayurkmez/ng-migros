import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { projectCollection } from '../models/mocks/projects.mock';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent //implements OnInit  
{
  projects: Project[] = [];
  searchKey: string | undefined;

  constructor(
    private activeRoute: ActivatedRoute,
    private projectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.projectsService.getProjects()
      .subscribe(data => {       
        this.activeRoute.params.subscribe(routeParam => {
          console.log(routeParam['id']);
          this.projects = data;
          if (routeParam['id'] != undefined) {
            this.projects = this.projects.filter(p => p.departmentId == routeParam['id'])

          }
        })
      })
      ;

  }

  // ngOnInit(){

  // }




}
