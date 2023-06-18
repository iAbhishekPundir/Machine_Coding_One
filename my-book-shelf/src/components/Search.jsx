import React, { useContext } from 'react'
import { BookContext } from '../main'
import { BookCard } from './BookCard';

export const Search = () => {
    const { filteredData, handleSearch,} = useContext(BookContext);

  return (
   <>
     {filteredData && (
           <div>
            <div>
                <input type='text' placeholder='Search book with title' onChange={handleSearch} />
            </div>
             <div className='container'>
                {filteredData.map((book)=>(
                    <BookCard books={book} />
                ))}
            </div>
           </div>
        )}
   </>
  )
}
