import React from "react";
import Recipe from "./Recipe";

export default function Recipes({recipes, choosingRecipe}) {
  
  const recipesTab= recipes.recipes.recipes;
  console.log(recipesTab);

  
    return <div className="recipesContainer">{recipesTab && recipesTab.map((recipe, index) => <Recipe nameRecipe={recipe.strMeal} image={recipe.strMealThumb} key={index} choosingRecipe={choosingRecipe} />)}</div>;
  



}
