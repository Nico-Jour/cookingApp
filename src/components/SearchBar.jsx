import React from "react";
import { useNavigate } from "react-router-dom";


export default function SearchBar({ term, onChange, handleSearch}) {
  
  let navigate=useNavigate();

  const pressEnter = (e) => {
    if(e.keyCode === 13){
        e.preventDefault();
       navigate("/cookingApp");
        console.log(term);
        handleSearch();
    }}


  return (
    <div className="searchField">
        <input 
          className="searchField_field" 
          type="text" 
          value={term} 
          onInput={(e) => onChange(e.target.value)} 
          onKeyUp={pressEnter} 
          placeholder="Chercher une recette" 
        />
    </div>
  )}