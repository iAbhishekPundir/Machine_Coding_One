import React, { useContext } from "react";
import { BookContext } from "../main";
// import { BookCard } from "../components/BookCard";
import { Shelf } from "../components/Shelf";

export const Home = () => {
  const { bookData } = useContext(BookContext);

  return (
    <>
    <div>
    {bookData && (
        <div >
          <h1>My Bookshelf</h1>
        <Shelf shelfTitle="Currently Reading"  books={bookData.filter(book => book.currentlyReading)} />
        <Shelf shelfTitle="Want to Read"  books={bookData.filter(book => book.wantToRead)} />
        <Shelf shelfTitle="Read"  books={bookData.filter(book => book.read)} />
        </div>
      )}
    </div>
    </>
  );
};
