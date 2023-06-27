// import { createContext, useEffect, useState } from "react";
// import { fakeFetch } from "../data/fakeFetch";

// export const BookContext = createContext();

// const bookReducer = (state, action) => {
//   const {books, spam, trash} = state;
//   switch (action.type) {
//     case "FETCH_START":
//       return { ...state, isLoading: true };

//     case "FETCH_SUCCESS":
//       return { ...state, isLoading: false, books: action.payload };

//     case "FETCH_ERROR":
//       return { ...state, isLoading: false, error: action.payload };

//     case "MOVE_TO_CURRENTLY_READING":
//         const currentShelf = state.books.filter((book) => book.id !== action.payload);
//         const updatedShelf = state.books.find((book) => book.id === action.payload);
//         return { ...state, books: currentShelf ,currentlyReading: [...currentlyReading, updatedShelf]};
    
//     case "MOVE_TO_WANT_TO_READ":
//         const deleteMail = state.books.filter((book) => book.mId !== action.payload);
//         const deletedMails = state.books.find((book) => book.mId === action.payload);
//         return { ...state, books: deleteMail ,trash: [...trash, deletedMails]};
    
//         case "MOVE_TO_READ":
//           const deleteMail = state.books.filter((book) => book.mId !== action.payload);
//           const deletedMails = state.books.find((book) => book.mId === action.payload);
//           return { ...state, books: deleteMail ,trash: [...trash, deletedMails]};
    
    
  

//     case "RESTORE":
//         const restoreMail = state.trash.filter((book) => book.mId !== action.payload);
//         const restoredMail = state.trash.find((book) => book.mId === action.payload);
//         return {...state, trash: restoreMail, books: [...books, restoredMail]};

    
 

//     default:
//       throw new Error(`Unhandled action type: ${action.type}`);
//   }
// }

// export const BookProvider = ({children}) => {
//   const [bookData, setBookData] = useState([]);
//   const [error, setError] = useState("");
//   const [filteredData, setFilteredData] = useState([]);
//   const initialState = {
//     isLoading: true,
//     error: null,
//     book: [],
//     cuurrentlyReading: [],
//     wantToRead: [],
//     read: [],
//   };
//   const [state, dispatch] = useReducer(bookReducer, initialState);
//   const getData = async () => {
//     try {
//       const response = await fakeFetch("https://example.com/api/books");
//       if (response?.status === 200) {
//         setBookData(() => response.data.books);
//         dispatch({ type: "FETCH_SUCCESS", payload: response.data.books });
//       }
//     } catch (err) {
//       if (err.status === 404) {
//         setError(() => err);
//       }
//     }
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const handleSearch = (event) => {
//     const filterData = bookData.filter((book)=> book.title.toLowerCase().includes(event.target.value.toLowerCase()));
//     setFilteredData(()=> filterData);
//   }
//   const handleShelfStatus = (books) => {  
//     if (books.currentlyReading) {
//       const newBookData = bookData.map((book)=> ({
//         ...book,
//         currentlyReading: books.id === book.id ? !book.currentlyReading : book.currentlyReading
//       }));
//       setBookData(()=> newBookData);
//     }
//     else if (books.wantToRead) {
//       const newBookData = bookData.map((book)=> ({
//         ...book,
//         wantToRead: books.id === book.id ? !book.wantToRead: book.wantToRead
//       }));
//       setBookData(()=> newBookData);
//     }
//     else if (books.read) {
//       const newBookData = bookData.map((book)=> ({
//         ...book,
//         read: books.id === book.id ? !book.read : book.read
//       }));
//       setBookData(()=> newBookData);
//     }
//     else {
//       const newBookData = bookData.map((book)=> ({
//         ...book,
//         read: readBook.id === book.id ? !book.read : book.read
//       }));
//       setBookData(()=> newBookData);
//     }
    
//   };

//   return (<>
//     {
//         bookData && <div>
//             <BookContext.Provider value={{bookData,setBookData, handleShelfStatus, handleSearch, filteredData}}>
//                 {children}
//             </BookContext.Provider>
//         </div>
//     }
//   {error && <p> {error.message} </p>}
//   </>);
// };
