import React from 'react'
import { BookCard } from './BookCard'

export const Shelf = ( { shelfTitle, books, }) => {

  return (
    <div className="container"> 
        <h2 style={{minWidth:"300px"}}>{ shelfTitle}</h2>
        <br/><br/>
        {books.map((book) => (
        <BookCard
          books={book}
        />
      ))}
    </div>
  )
}
