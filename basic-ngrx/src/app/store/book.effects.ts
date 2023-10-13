
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as fromBooks from "./index";
import { BookService } from "../services/book.service";
import { map, switchMap } from "rxjs";
import { IBook } from "../interfaces/book.interface";
import { Injectable } from "@angular/core";

//side effect: action çalıştığında ne yapılacak (servis çağıracak)
@Injectable()
export class BooksEffects {
    constructor(private readonly actions$: Actions,
        private readonly bookService: BookService) { }

    getBooks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromBooks.getBooks.type),
            switchMap(() => this.bookService.getBooks()),
            map((books: IBook[]) => fromBooks.getBooksSuccess({ books })
            )
        ));

    createBook$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromBooks.crateBook.type),
            switchMap(({ book }) => this.bookService.create(book)),
            map((book: IBook) => fromBooks.crateBookSuccess({ book }))
        )
    );

    updateBook$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromBooks.updateBook.type),
            switchMap(({ book }) => this.bookService.update(book)),
            map((book: IBook) => fromBooks.updateBookSuccess({ book }))
        )

    );

    deleteBook$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromBooks.deleteBook.type),
            switchMap(({ book }) => this.bookService.delete(book)),
            map((book: IBook) => fromBooks.deleteBookSuccess({ book }))
        )

    );

}