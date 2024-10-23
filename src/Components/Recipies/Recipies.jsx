import { useEffect, useState } from "react";
import Recipe from "../Recipie/Recipe";

const Recipies = () => {
    const [RecipieArray,setRecipieArray]=useState([])
    useEffect(()=>{
        fetch('../../../public/RecipeList.json')
            .then(res=>res.json())
            .then(data=>setRecipieArray(data))
    },[])
    return (
        <div>
            {
                RecipieArray.map((recipie,idx)=><Recipe key={idx} recipie={recipie}></Recipe>)
            }
        </div>
    );
};

export default Recipies;