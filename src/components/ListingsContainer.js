import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listingList, onClick, onDelete}) {

  const cardList = listingList.map((item)=> (
    <ListingCard item={item} key={item.id} onClick={onClick} onDelete={onDelete}/>
  ))
  
  return (
    <main>
      <ul className="cards">
        {cardList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
