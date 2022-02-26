import React from "react";
import Filter from "./Filter"



export default function Filters({recipes, onFilterTerm}) {
  const recipesTab= recipes.recipes.recipes;
  

  const filtersList = [...new Set(recipesTab.map(recipe => recipe.strCategory))];
  

  return ( 
  <div>
  <div className="filters">
    <Filter category= "All" onFilterTerm={onFilterTerm}/>
    {filtersList && filtersList.map((filter, index) => 
      <Filter
        category={filter}
        onFilterTerm={onFilterTerm}
        key={index}  />)
        }
        
    </div>
</div>
)}
