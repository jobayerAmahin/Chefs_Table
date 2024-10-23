import { useState } from "react";
import Calories from "../Calories/Calories";
import Recipies from "../Recipies/Recipies";


const Main = () => {
    const [WantToCook,setWantToCook]=useState(0)
    const [WantToCookArray,setWantToCookArray]=useState([])
    const handleCookBtn=recipie=>{
        setWantToCook(WantToCook+1)
        const updatedArray=[...WantToCookArray,recipie]
        setWantToCookArray(updatedArray)
    }
    console.log(WantToCookArray)
    return (
        <div className="flex">
            <div className="w-2/3">
                 <Recipies handleCookBtn={handleCookBtn}></Recipies>
            </div>
            <div className="w-1/3">
                <Calories WantToCook={WantToCook}></Calories>
            </div>

        </div>

    );
};

export default Main;