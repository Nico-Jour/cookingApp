import React from "react";
import Recipes from "./Recipes";
import Filters from "./Filters";




export default function Main({recipes, favourites, isFavourite, handleFavourites, filter, onFilterTerm}) {
 
  


  return (
    
    <div className="main">
     
     
      <Filters recipes={recipes} onFilterTerm={onFilterTerm} filter={filter}/>
      <Recipes recipes={recipes} favourites={favourites} handleFavourites={handleFavourites} filter={filter} isFavourite={isFavourite} />
      
      
    </div>
  );
}
