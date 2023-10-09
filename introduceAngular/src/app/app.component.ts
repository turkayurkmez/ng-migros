import { Component } from '@angular/core';
import { TodoItem } from './models/todoItem.model';


const todoItems: TodoItem[] = [
  new TodoItem('Çiçekleri sula', false),
  new TodoItem('Angular Öğren', false),
  new TodoItem('ASP.NET Core ile api yaz', true)
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Öğreniyorum';
  title2 = 'Bu ilk ders...';

  paragraph: string = 'Bu bir paragraf';
  date: string = 'Ekim 2023';

  items: TodoItem[] = todoItems;

  showAllItems: boolean = true;
  buttonText: string = 'Yapılan işleri gizle';

  filter(): void {
    this.showAllItems = !this.showAllItems;
    if (!this.showAllItems) {
      this.items = this.items.filter(item => !item.isDone);
      this.buttonText = 'Tümünü göster'
    }
    else {
      this.buttonText = 'Yapılan işleri gizle';

      this.items = todoItems;
    }
  }

  getItemsCount(): number {
    return this.items.filter(item => !item.isDone).length;
  }

  addNewTask(name:string){
    let todoItem = new TodoItem(name,false);
    this.items.push(todoItem);
  }


}
