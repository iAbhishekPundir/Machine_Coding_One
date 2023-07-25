import React, { useReducer } from 'react';
import { books } from "../data/fakeFetch";
import { BookReducer } from "../reducer/BookReducer";

export const BookContext = ({ children }) => {
    const [dataState, dataDispatch] = useReducer(BookReducer, {
        bookData: books
    });

  return (
    <BookContext.Provider value={{ dataState, dataDispatch}}>
        { children }
    </BookContext.Provider>
  );
};

export const useData = () => useContext(DataContext);


