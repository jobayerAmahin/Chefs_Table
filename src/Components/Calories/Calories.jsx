import PropTypes from "prop-types";
import Calorie from "../Calorie/Calorie";
const Calories = ({WantToCook,WantToCookArray}) => {
    return (
        <div>
            <h1>Calories:{WantToCook}</h1>
            <div>
                {
                    WantToCookArray.map((calorie,idx)=><Calorie key={idx} calorie={calorie}></Calorie>)
                }
            </div>
        </div>
    );
};
Calories.propTypes={
    WantToCook:PropTypes.number,
    WantToCookArray:PropTypes.array
}
export default Calories;