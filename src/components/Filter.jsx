import React from "react"; 


export default function Filter ({category, onFilterTerm, filter}) {



    return <button className = {category === filter ? "filter active" : "filter"} onClick={()=>onFilterTerm(category)}>{category}</button>




}