import React from "react"; 


export default function Filter ({category, onFilterTerm}) {

//changement de couleur lorsque le filtre est sélectionné

    return <button className = "filter" onClick={()=>onFilterTerm(category)}>{category}</button>




}