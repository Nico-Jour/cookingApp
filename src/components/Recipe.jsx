import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

export default function Recipe({recipe, handleFavourites, isFavourite}) {


  return <div className="recipeThumb">
      <Link to={`/recette/${recipe.idMeal}`}>
      <img src={recipe.strMealThumb} alt="ilustration" className="imageThumb" />
      </Link>
     <h2 className="recipeName">{recipe.strMeal}</h2>
     <FontAwesomeIcon 
        className="favorite fa-2x"
        icon={faHeart} 
        onClick={()=>handleFavourites(recipe.idMeal)}
        style={isFavourite(recipe.idMeal) ? {color: '#FBB040'} : {color: '#FFF'}} />
     </div>;
}

