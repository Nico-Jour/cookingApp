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
                    <div className='onglets' onClick={()=>handleTab(1)}>Ingrédients</div>
                    <div className='onglets' onClick={()=>handleTab(2)}>Recette</div>
            </div>
            <div className="container">
                {stateTab === 1 ?
                <ul className="contenuIngredients">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur libero dolore magni ad impedit illo eius quis iure soluta tempora? Officiis dolore perspiciatis ab natus suscipit, possimus obcaecati cupiditate officia accusantium porro pariatur, nihil animi voluptatem eum, labore atque consectetur ipsum quam incidunt fugiat laborum deleniti et minus voluptas! Recusandae illo, voluptates unde beatae corporis, id veritatis nam voluptatum ab architecto placeat dolorum eos quae, aspernatur tempora. Magni, a soluta numquam ipsum perferendis, sequi doloremque ipsam vitae velit fugit quis quas libero error distinctio vero nostrum. Nesciunt suscipit commodi, adipisci rem ea est recusandae facilis, architecto aut dolores repellendus ipsa.
                </ul>
                :
                <div className="contenuInstructions">
                    <iframe width="500" height="283" src={selRecipe.strYoutube.replace('watch?v=','embed/')} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                }   
            </div>
    </div>
  )
}


//https://www.youtube.com/embed/2cKVlDPg6wc
//https://www.youtube.com/watch?v=2cKVlDPg6wc

