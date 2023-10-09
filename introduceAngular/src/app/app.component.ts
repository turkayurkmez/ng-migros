import { Component } from '@angular/core';
import { TodoItem} from './models/todoItem.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Öğreniyorum';
  title2 = 'Bu ilk ders...';

  paragraph: string = 'Bu bir paragraf';
  date: string ='Ekim 2023';

  items: TodoItem[]=[
    new TodoItem('Çiçekleri sula',false),
    new TodoItem('Angular Öğren',false),
    new TodoItem('ASP.NET Core ile api yaz',true)
  ]

  
}
