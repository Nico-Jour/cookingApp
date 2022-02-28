import React from "react";


export default function SearchBar({ term, onChange, handleSearch}) {
  
  const pressEnter = (e) => {
    if(e.keyCode === 13){
        e.preventDefault();
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