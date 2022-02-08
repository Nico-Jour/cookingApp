import React, {useState} from "react";
import Recipes from "./Recipes";
import Filters from "./Filters";
import RecipeDetails from "./RecipeDetails";
import { Link } from "react-router-dom";

export default function Main({recipes}) {
  let [ isRecipeChoosen, setRecipeChoosen] = useState(false)
  let recipeID = null;
  let newChoice = false;

  const choosingRecipe = () => {
    newChoice = !isRecipeChoosen;
    console.log(newChoice);
    setRecipeChoosen(newChoice);
  }


  return (
    <div style={{ height: "100%", background: "gold", marginTop: "2rem" }}>
      {//<Link to="/header">Go to Header</Link>
}
      <Filters />
      { !isRecipeChoosen? <Recipes 
        recipes={recipes} 
        choosingRecipe={choosingRecipe}/> 
        :
         <RecipeDetails recipes={recipes} choosingRecipe={choosingRecipe} /> }
    </div>
  );
}
