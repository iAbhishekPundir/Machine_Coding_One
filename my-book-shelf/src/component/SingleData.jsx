import React from 'react'
import "./SigleData.css"
import { useData } from '../contexts/BookContext'
export const SingleData = ({item}) => {
    const { dataDispatch } = useData();
    const hanndleChange = (e) => {
        if (e.target.value !== "✔" + item.status) {
            dataDispatch({
                type: "NEW_STATUS",
                payload: { newStatus: e.target.value, title: item.title}
            });
        }
    };
    const { img } = item;
    const statusArray = ["Read", "Currently Reading", "Want To Read", "none"];

  return (
    <div className="Container">
      <div className="mainContainer">
        <img src={img} alt="book-image" />
        <p className="w">Title : {item.title} </p>
        <p>Author : {item.author}</p>
        <p>Status: {item.status}</p>
        <select onChange={hanndleChange} className='dropdown'>
            <option className='MoveTo'>Move To</option>
            {statusArray?.map((data) => (
                <option key={data}>
                    {item.status === data ? "✔" : ""}
                    {data}
                </option>
            ))}
        </select>
      </div>
    </div>
  )
}


