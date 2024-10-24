import PropTypes from "prop-types";
import Calorie from "../Calorie/Calorie";
const Calories = ({WantToCook,WantToCookArray,handlePrepareBtn}) => {
    return (
        <div>
            <h1>Calories:{WantToCook}</h1>
            <div>
                {
                    WantToCookArray.map((calorie,idx)=><Calorie handlePrepareBtn={handlePrepareBtn} key={idx} calorie={calorie}></Calorie>)
                }
            </div>
        </div>
    );
};
Calories.propTypes={
    WantToCook:PropTypes.number,
    WantToCookArray:PropTypes.array,
    handlePrepareBtn:PropTypes.func
}
export default Calories;