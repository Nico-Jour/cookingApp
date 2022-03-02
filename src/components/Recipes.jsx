import React from "react";
import Recipe from "./Recipe";
import popotte from "../Assets/popotte.png";

export default function Recipes({ recipes, filter, handleFavourites, isFavourite }) {
  
  const filteredRecipes= recipes.recipes.recipes.filter((recipe)=> recipe.strCategory.toLowerCase() === filter.toLowerCase());
  const recipesTab = filter === "All" ? recipes.recipes.recipes : filteredRecipes
  
  
  console.log(recipesTab)

    return (
    <div className="recipesContainer">
      {recipesTab.map((recipe, index) => <Recipe 
          recipe={recipe}
          handleFavourites={handleFavourites}
          isFavourite={isFavourite}
          key={index}  />)}
     { recipesTab.length === 0 ?  <img className="noResult" src={popotte} alt="No Results"/> : null}
    </div>
    )
    
  }
  
  
  

