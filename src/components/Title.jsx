import React from "react";


export default function Title( {selRecipe :{strMeal, strMealThumb }} ) {


    return (
        <div className= "RecipeDetails">
            <img className='imgDetail' src={strMealThumb} alt= "recette"/>
            <h2 className="titleDetail" >{strMeal}</h2>
        </div>

    )


};