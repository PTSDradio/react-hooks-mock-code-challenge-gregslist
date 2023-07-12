import React from "react";

function ListingCard({item, onClick, onDelete}) {
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {item.favorite ? (
          <button className="emoji-button favorite active" onClick={()=>{onClick(item.id)}}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={()=>{onClick(item.id)}}>☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button className="emoji-button delete" onClick={()=>{onDelete(item.id)}}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
