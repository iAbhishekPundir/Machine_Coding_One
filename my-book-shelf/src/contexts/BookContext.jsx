import { createContext, useEffect, useState } from "react";
import { fakeFetch } from "../data/fakeFetch";

export const BookContext = createContext();

export const BookProvider = ({children}) => {
  const [bookData, setBookData] = useState([]);
  const [error, setError] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/books");
      if (response?.status === 200) {
        setBookData(() => response.data.books);
      }
    } catch (err) {
      if (err.status === 404) {
        setError(() => err);
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = (event) => {
    const filterData = bookData.filter((book)=> book.title.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilteredData(()=> filterData);
  }
  const handleShelfStatus = (books) => {  
    if (books.currentlyReading) {
      const newBookData = bookData.map((book)=> ({
        ...book,
        currentlyReading: books.id === book.id ? !book.currentlyReading : book.currentlyReading
      }));
      setBookData(()=> newBookData);
    }
    else if (books.wantToRead) {
      const newBookData = bookData.map((book)=> ({
        ...book,
        wantToRead: books.id === book.id ? !book.wantToRead: book.wantToRead
      }));
      setBookData(()=> newBookData);
    }
    else if (books.read) {
      const newBookData = bookData.map((book)=> ({
        ...book,
        read: books.id === book.id ? !book.read : book.read
      }));
      setBookData(()=> newBookData);
    }
    else {
      const newBookData = bookData.map((book)=> ({
        ...book,
        read: readBook.id === book.id ? !book.read : book.read
      }));
      setBookData(()=> newBookData);
    }
    
  };

  return (<>
    {
        bookData && <div>
            <BookContext.Provider value={{bookData,setBookData, handleShelfStatus, handleSearch, filteredData}}>
                {children}
            </BookContext.Provider>
        </div>
    }
  {error && <p> {error.message} </p>}
  </>);
};
