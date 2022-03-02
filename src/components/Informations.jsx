import React from 'react'
import { useState } from 'react'            

export default function Informations({selRecipe}) {

    const [ stateTab , setStateTab ] = useState (1);

    const handleTab = (x) => {
        setStateTab((prevState) => x);
    }



  return (
    <div className='tabs-container'>
            <div className="tabs">
                    <div className={stateTab === 1 ? 'onglets activeTab' : 'onglets'} onClick={()=>handleTab(1)}>Ingrédients</div>
                    <div className={stateTab === 2 ? 'onglets activeTab' : 'onglets'} onClick={()=>handleTab(2)}>Recette</div>
            </div>
            <div className="container">
                {stateTab === 1 ?
                <div className= "ingredientQuantite">
                <ul className="ingredients">

                    {Object.keys(selRecipe).filter(key => key.startsWith('strIngredient')).map((ingredient,index) => {
                        if (selRecipe[ingredient] !== ""){
                            return <li className="ingredient" key={index}> - {selRecipe[ingredient]}</li>
                        }
                        return "";
                    })}
                </ul>
                <ul>
                    {Object.keys(selRecipe).filter(key => key.startsWith('strMeasure')).map((quantite, index) => {
                        if (selRecipe[quantite] !== "") {
                        return <li className="quantite" key={index}>{selRecipe[quantite]}</li>}
                        return "";
                        })}
                
                </ul>
                </div>
                :
                <div className="instructions">
                    <iframe width="500" height="283" src={selRecipe.strYoutube.replace('watch?v=','embed/')} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <p className="instructions_paragraphe">
                        {selRecipe.strInstructions}
                    </p>
                    <div className="footer"></div>
                </div>
                }   
            </div>
    </div>
  )
}


//https://www.youtube.com/embed/2cKVlDPg6wc
//https://www.youtube.com/watch?v=2cKVlDPg6wc

