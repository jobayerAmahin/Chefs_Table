import { useState } from "react";
import Calories from "../Calories/Calories";
import Recipies from "../Recipies/Recipies";
import Preparing from "../Preparing/Preparing";


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

    const [TotalCalories,setTotalCalories]=useState(0)
    const [PreparingArray,setPreparingArray]=useState([])
    const handlePrepareBtn=(prepareItem,id,calorie)=>{
        const newPrepare=[...PreparingArray,prepareItem]
        setPreparingArray(newPrepare)
        const remainingArray=WantToCookArray.filter(remain=>remain.recipe_id!==id)
        setWantToCookArray(remainingArray)
        setWantToCook(WantToCook-1)
        setTotalCalories(TotalCalories+calorie)
    }

    console.log()
    return (
        <div className="flex">
            <div className="w-2/3">
                 <Recipies recipeId={recipeId} handleCookBtn={handleCookBtn}></Recipies>
            </div>
            <div className="w-1/3">
                <div>
                    <Calories handlePrepareBtn={handlePrepareBtn} WantToCook={WantToCook} WantToCookArray={WantToCookArray}></Calories>
                </div>
                <div>
                    <Preparing TotalCalories={TotalCalories} PreparingArray={PreparingArray}></Preparing>
                </div>
            </div>

        </div>

    );
};

export default Main;