import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Recipe from "../Recipie/Recipe";

const Recipies = ({handleCookBtn}) => {
    const [RecipieArray,setRecipieArray]=useState([])
    useEffect(()=>{
        fetch('../../../public/RecipeList.json')
            .then(res=>res.json())
            .then(data=>setRecipieArray(data))
    },[])
    return (
        <div>
            {
                RecipieArray.map((recipie,idx)=><Recipe handleCookBtn={handleCookBtn} key={idx} recipie={recipie}></Recipe>)
            }
        </div>
    );
};

Recipies.propTypes={
    handleCookBtn:PropTypes.func
}
export default Recipies;