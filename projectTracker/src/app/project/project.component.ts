import { Component, Input, AfterContentChecked } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements AfterContentChecked {

  ngAfterContentChecked(): void {
    this.activeTasksCount = this.project?.tasks?.filter(t => !t.isDone).length
  }

  @Input('current') project: Project = new Project();

  activeTasksCount?: number = 0;


  // her seferinde, fonksiyon çağırmak bileşen maaliyetini olumsuz etkiler. 
  // getActiveTasksCount(){
  //   return this.project?.tasks?.filter(t=>!t.isDone).length;
  // }
}
