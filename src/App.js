import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "./app.css"
import RecipeDetails from "./components/RecipeDetails"

import axios from "axios";
import { Route, Routes } from "react-router-dom";







export default function App() {
  const [store, setStore] = useState({
    recipes: {
      term: "",
      recipes: []
    }
  });

  const [search, setSearch] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [filter, setFilter] = useState("All");

  const onFilterTerm = (filter) => {
    setFilter(filter)
  }

  const buildNewState = (propToModify, value) => {
    return {...store,recipes: {...store.recipes,[propToModify]: value}};
  };

  useEffect(() => {
    async function fetchRecipes() {
      const url = `https://themealdb.com/api/json/v1/1/search.php?s=${store.recipes.term || "All"}`;

      let { data: { meals: recipes } } = await axios(url);
      recipes = recipes === null ? [] : recipes;
      const newState =  buildNewState("recipes", recipes) ;

      setStore(newState);
    }
   fetchRecipes();
  }, [search]);

console.log(store.recipes);

  useEffect(()=> {
//on veut seter la valeur de favourites à la valeur stocké
//à chaque modif de favourites, on veut mettre à jour le local storage

    

  },[favourites])

  const handleSearch = () => {
    const newSearch = store.recipes.term;
    setSearch(newSearch);
  }
  
  const handleChange = (term) => {
    const newState = buildNewState("term", term);

    setStore(newState);
  };

  const handleFavourites = (id) => {

    if (isFavourite(id)){
      removeFavourite(id)
    }else{
      addFavourite(id)
    }
  }
  //console.log(favourites);

  const isFavourite = (id) => {
    return favourites.some((el)=> el===id);
  }

  const addFavourite = (id) => {
    setFavourites((prevState) => [...prevState, id]);
  }

  const removeFavourite = (id) => {
    setFavourites((prevState) => {
      return prevState.filter(el => el !== id);
    });
  }






  return (
    <div >
      <Routes>
        <Route 
          path="/" 
          element={<Header onChange={handleChange} 
          term={store.recipes.term} 
          handleSearch={handleSearch} />}>
            
          <Route 
            path="" 
            element={ 
              <Main 
                recipes={store}
                favourites={favourites}
                handleFavourites={handleFavourites}
                isFavourite={isFavourite}
                onFilterTerm={onFilterTerm}
                filter={filter}
              /> 
            } 
          />
          <Route 
            path="recette/:idMeal" 
            element={ <RecipeDetails recipes={store} /> } 
          />
        </Route>
      </Routes>
      <div className="footer"></div>
    </div>
  );
}
