import { Action, createReducer, on } from "@ngrx/store";
import { IBookState } from "./book.model";

import * as fromBooks from "./index"


export const initialBookStore : IBookState = {
    books:[],
    isLoading:false
}

const reducer = createReducer<IBookState>(
        initialBookStore,
        on(fromBooks.getBooks,(state)=>{
            return {
                ...state, 
                isLoading:true
            };
        }),

        on(fromBooks.getBooksSuccess,(state,{books})=>{
            return {
                ...state, 
                isLoading:false,
                books
            };
        }),

        on(fromBooks.crateBook,(state)=>{
            return {
                ...state, 
                isLoading:true                
            };
        }),

        on(fromBooks.crateBookSuccess,(state,{book})=>{
            return {
                ...state, 
                isLoading:false,
                books:[...state.books,book]                
            };
        }),

        on(fromBooks.updateBook,(state)=>{
            return {
                ...state, 
                isLoading:true,                           
            };
        }),

        on(fromBooks.updateBookSuccess,(state,{book})=>{
            return {
                ...state, 
                isLoading:false,
                books:state.books.map((b)=>b.id === book.id ? book: b)        
            };
        }),
        on(fromBooks.deleteBook,(state)=>{
            return {
                ...state, 
                isLoading:true,                           
            };
        }),

        on(fromBooks.deleteBookSuccess,(state,{book})=>{
            return {
                ...state, 
                isLoading:false,
                books:state.books.filter((b)=>b.id !== book.id )        
            };
        }),



    
    )

    export function bookReducer(state= initialBookStore, action:Action): IBookState{
        return reducer(state,action);
    }