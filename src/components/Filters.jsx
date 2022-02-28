import React from "react";
import Filter from "./Filter"



export default function Filters({recipes, onFilterTerm, filter}) {
  const recipesTab= recipes.recipes.recipes;
  

  const filtersList = [...new Set(recipesTab.map(recipe => recipe.strCategory))];
  

  return ( 
  <div>
  <div className="filters">
    <Filter category= "All" onFilterTerm={onFilterTerm} filter={filter}/>
    {filtersList && filtersList.map((strFilter, index) => 
      <Filter
        category={strFilter}
        onFilterTerm={onFilterTerm}
        filter={filter}
        key={index}  />)
        }
        
    </div>
</div>
)}
