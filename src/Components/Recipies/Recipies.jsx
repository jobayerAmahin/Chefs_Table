import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Recipe from "../Recipie/Recipe";

const Recipies = ({handleCookBtn,recipeId}) => {
    const [RecipieArray,setRecipieArray]=useState([])
    useEffect(()=>{
        fetch('../../../public/RecipeList.json')
            .then(res=>res.json())
            .then(data=>setRecipieArray(data))
    },[])
    return (
        <div>
            {
                RecipieArray.map((recipie,idx)=><Recipe recipeId={recipeId} handleCookBtn={handleCookBtn} key={idx} recipie={recipie}></Recipe>)
            }
        </div>
    );
};

Recipies.propTypes={
    handleCookBtn:PropTypes.func,
    recipeId:PropTypes.array
}
export default Recipies;