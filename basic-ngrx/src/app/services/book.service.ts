import { Injectable } from '@angular/core';
import { IBook } from '../interfaces/book.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  private bookList: IBook[] = [
    {
      id: 1,
      name: 'Book A'
    },
    {
      id: 2,
      name: 'Book B'
    }
  ]

  getBooks(): Observable<IBook[]>{
    return of(this.bookList);
  }

  create(book: IBook): Observable<IBook>{
    this.bookList = [...this.bookList, book];
    return of(book);
  }

  update(book:IBook): Observable<IBook>{
    this.bookList.map(b=>b.id === book.id ? book : b);
    return of(book);
  }

  delete(book:IBook):Observable<IBook>{
    this.bookList = this.bookList.filter(b=>b.id!== book.id);
    return of(book);
  }
}
