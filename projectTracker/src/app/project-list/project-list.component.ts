import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { projectCollection } from '../models/mocks/projects.mock';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent //implements OnInit  
{
  projects: Project[] = projectCollection
  searchKey: string | undefined;

  constructor(
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(routeParam => {
      console.log(routeParam['id']);
      this.projects = projectCollection;
      if (routeParam['id'] != undefined) {
        this.projects = this.projects.filter(p => p.departmentId == routeParam['id'])

      }

    });

  }

  // ngOnInit(){

  // }




}
