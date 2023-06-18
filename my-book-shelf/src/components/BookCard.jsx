import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { BookContext } from "../main";

const getActiveStyle = ({ isActive }) => ({
  margin: "1rem 0",
  fontWeight: isActive ? "600" : "400",
  padding: isActive ? "1rem" : "0.5rem",
  color: isActive ? "purple" : "",
});

export const BookCard = ({ books, }) => {
  const { id, title, author, image} = books;
  const { handleShelfStatus } = useContext(BookContext);
  const [status, setStatus] = useState(false);

  const handleStatus = () => {
    setStatus(!status);
  }

  return (
    <>
      <div className="book-card" key={id} >
        <div className="image-div">
          <img src={image} alt={title} width="100%" />
        </div>

        <div className="book-info">
          <p>
            {" "}
            <b>Title:</b> {title}{" "}
          </p>
          <p>
            {" "}
            <b>Author:</b> {author}{" "}
          </p>
          <button onClick={handleStatus}>Move to...</button>
          {status && (<div style={{border:"1px solid gray", borderRadius:"6px", marginLeft:1}}>
            <button style={{margin:"2px"}} onClick={()=>handleShelfStatus(books)}>Currently Reading</button>
            <button style={{margin:"2px"}} onClick={()=>handleShelfStatus(books)}>Want to read</button>
            <button style={{margin:"2px"}} onClick={()=>handleShelfStatus(books)}>read</button>
            <button style={{margin:"2px"}} onClick={()=>handleShelfStatus(books)}>none</button>
          </div>)}
        </div>
      </div>
    </>
  );
};
