import React, { useContext } from 'react'
import {NavLink} from "react-router-dom";
import {  BookContext } from '../main';

const getActiveStyle = ({ isActive }) => ({
    margin: "1rem 0",
    fontWeight: isActive ? "600" : "400",
    padding: isActive ? "1rem" : "0.5rem",
    color: isActive ? "purple" : "",
    textDecoration:"none"
  });
export const Header = () => {
  const {readData} = useContext(BookContext);
  return (
    <>
       <div>
       <nav>
            <NavLink style ={getActiveStyle} to="/">
                All Books
            </NavLink>
            <NavLink style ={getActiveStyle} to="/search">
                Search
            </NavLink>
            
        </nav>
       </div>
    </>
  )
}
