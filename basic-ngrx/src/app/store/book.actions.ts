import { createAction, props } from "@ngrx/store";
import { IBook } from "../interfaces/book.interface";

const prefix = '[Books]';

//1. Komutları ve sonuçlarını oluştur
export const getBooks = createAction(`${prefix} Get Books`);
export const getBooksSuccess = createAction(`${getBooks.type} Success`, props<{books: IBook[]}>());


export const crateBook = createAction(`${prefix} Create Book`, props<{book:IBook}>());
export const crateBookSuccess = createAction(`${crateBook.type} Success`,props<{book:IBook}>());

export const updateBook = createAction(`${prefix} Update Book`, props<{book:IBook}>());
export const updateBookSuccess = createAction(`${updateBook.type} Success`,props<{book:IBook}>());

export const deleteBook = createAction(`${prefix} Delete Book`, props<{book:IBook}>());
export const deleteBookSuccess = createAction(`${deleteBook.type} Success`,props<{book:IBook}>());