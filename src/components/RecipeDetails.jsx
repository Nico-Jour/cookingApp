import React from 'react'
import Title from './Title'

import { Link, useParams } from "react-router-dom";
import Informations from './Informations';


export default function RecipeDetails({ recipes }){
    const params = useParams();
    const selRecipe = recipes.recipes.recipes.find(recette => recette.idMeal===params.idMeal);
    

    return (
        <div>
            <Link to="/"><p className= "backButton"> &lt; back to results </p></Link>
            <Title selRecipe={selRecipe} />
            <Informations selRecipe={selRecipe} />
              
        </div>
    
    )}

