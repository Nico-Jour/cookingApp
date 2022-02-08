import React from "react";

export default function Recipe({nameRecipe, image, idMeal, choosingRecipe, key}) {
  
 console.log(idMeal);
  

  return <div className="recipeThumb" onClick={choosingRecipe}>
      <img src={image} alt="ilustration" className="imageThumb" />
     <h2 className="recipeName">{nameRecipe}</h2>
     </div>;
}
