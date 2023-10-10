import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Project[], key: string|undefined): Project[] {
    return key != undefined ?
      value.filter(p => p.name?.toLocaleLowerCase().includes(key.toLocaleLowerCase()))
      :
      value;
  }

}
