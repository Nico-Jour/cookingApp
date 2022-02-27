import React from 'react'
import { useState } from 'react'            

export default function Informations({selRecipe}) {

    const [ stateTab , setStateTab ] = useState (1);

    const handleTab = (x) => {
        setStateTab((prevState) => x);
    }

   



// for (let i=1; selRecipe[`strIngredient${i}`].length > 0 ; i++){
//     `${selRecipe[`strIngredient${i}`]} - ${selRecipe[`strMeasure${i}`]}` ;
// }





  return (
    <div className='tabs-container'>
            <div className="tabs">
                    <div className={stateTab === 1 ? 'onglets active' : 'onglets'} onClick={()=>handleTab(1)}>Ingrédients</div>
                    <div className={stateTab === 2 ? 'onglets active' : 'onglets'} onClick={()=>handleTab(2)}>Recette</div>
            </div>
            <div className="container">
                {stateTab === 1 ?
                <div className= "ingredientQuantite">
                <ul className="ingredients">

                    {Object.keys(selRecipe).filter(key => key.startsWith('strIngredient')).map((ingredient,index)=> {
                        if (selRecipe[ingredient] !== ""){
                            return <li className="ingredient" key={index}> - {selRecipe[ingredient]}</li>
                        }
                    })}
                </ul>
                <ul>
                    {Object.keys(selRecipe).filter(key => key.startsWith('strMeasure')).map((quantite, index) => {
                        if (selRecipe[quantite] !== "") {
                        return <li className="quantite" key={index}>{selRecipe[quantite]}</li>}
                        })}
                
                </ul>
                </div>
                :
                <div className="instructions">
                    <iframe width="500" height="283" src={selRecipe.strYoutube.replace('watch?v=','embed/')} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                }   
            </div>
    </div>
  )
}


//https://www.youtube.com/embed/2cKVlDPg6wc
//https://www.youtube.com/watch?v=2cKVlDPg6wc

