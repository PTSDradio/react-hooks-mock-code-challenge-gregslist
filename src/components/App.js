import React, { useState ,useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
 const api = `http://localhost:6001/listings`

  const [listingList, setListingList] = useState([])
  const [searchIndex, setSearchIndex] = useState([])

  useEffect(()=>{
    fetch(api)
    .then(resp=> resp.json())
    .then(data=>{
      const favlisting = data.map((listing)=>(
        {...listing, favorite: false}
        )
      )
      setListingList(favlisting)
      setSearchIndex(favlisting)
    })
  },[])

  const handleFavoriteEvent = (id) => {
    const updateList = listingList.map((item)=>{
    if(item.id===id &&  item.favorite===false){
      item.favorite = true
    } 
    else if(item.id===id &&  item.favorite===true){
      item.favorite = false
    }
    return item
  })
  setListingList(updateList)
  setSearchIndex(updateList)
  }

  const handleDeleteEvent = (id) => {
        fetch(`http://localhost:6001/listings/${id}`,{
          method: 'DELETE' 
        })
        .then(resp=>resp.json())
        .then(data=>{
          delFilter(id)
        })
      
    }
  // needs to update frontend
    const delFilter = (id) => {
      const updated = listingList.filter((item)=> item.id!==id)
      setListingList(updated)
      setSearchIndex(updated)
    }
    const [search, setSearch] = useState("")
    function handleSubmit(e,) {
      e.preventDefault();
      // if(search.length>0){
      const searchedArray = listingList.filter((item)=>item.description.toLowerCase().includes(search))
      setSearchIndex(searchedArray)
      // }
    }
   


 
  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} handleSubmit={handleSubmit}/>
      <ListingsContainer listingList={searchIndex} onClick={handleFavoriteEvent} onDelete={handleDeleteEvent}/>
    </div>
  );
}

export default App;
