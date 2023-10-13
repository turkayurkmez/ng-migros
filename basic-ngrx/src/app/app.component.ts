import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromBook from './store/index';
import { Observable } from 'rxjs';
import { IBook } from './interfaces/book.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'basic-ngrx';

  constructor(private store:Store){}
 

  initDispatch():void{
    this.store.dispatch(fromBook.getBooks())
  }

  books$: Observable<IBook[]>;
  isLoading$: Observable<boolean>;

  initSubscribes():void{
    this.books$ = this.store.pipe(select(fromBook.selectBookList));
    this.isLoading$ = this.store.pipe(select(fromBook.selectBookIsLoading));
    
  }



  ngOnInit(): void {
    this.initDispatch();
    this.initSubscribes();
  }

  createNewBook(name: string){
    this.store.dispatch(fromBook.crateBook({
      book:{
        id: Math.random(),
        name:name
      }
    }));


  }

  updateExistingBook(book:IBook, name:string){
    book.name = name;
    this.store.dispatch(fromBook.updateBook({book}));
  }

  deleteBook(book:IBook){
    this.store.dispatch(fromBook.deleteBook({book}));
  }


}
