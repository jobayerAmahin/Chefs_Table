import { useState } from "react";
import Calories from "../Calories/Calories";
import Recipies from "../Recipies/Recipies";


const Main = () => {
    const [WantToCook,setWantToCook]=useState(0)
    const [WantToCookArray,setWantToCookArray]=useState([])

    const [recipeId,setRecipeId]=useState([])

    const handleCookBtn=(recipie,id)=>{
        setWantToCook(WantToCook+1)

        const queueRecipe=[...recipeId,id]
        setRecipeId(queueRecipe)

        const updatedArray=[...WantToCookArray,recipie]
        setWantToCookArray(updatedArray)
    }
    console.log()
    return (
        <div className="flex">
            <div className="w-2/3">
                 <Recipies recipeId={recipeId} handleCookBtn={handleCookBtn}></Recipies>
            </div>
            <div className="w-1/3">
                <Calories WantToCook={WantToCook} WantToCookArray={WantToCookArray}></Calories>
            </div>

        </div>

    );
};

export default Main;