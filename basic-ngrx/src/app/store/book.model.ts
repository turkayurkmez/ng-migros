import { IBook } from "../interfaces/book.interface";

export interface IBookState{
    books: IBook[];
    isLoading: boolean;
}