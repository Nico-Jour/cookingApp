import React from 'react'
import { FontAwesomeicon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/react-fontawesome'
import heart from "../Assets/heart.svg"


export default function Favorite ({handleFavourites, isFavourite, idMeal}) {



    return (

        <FontAwesomeicon className = "favorite" 
        src = {heart} 
        style = {{backgroundColor: isFavourite(idMeal)? "yellow":"transparent"}}  
        onClick = {handleFavourites} alt="favoris" />

    )
}