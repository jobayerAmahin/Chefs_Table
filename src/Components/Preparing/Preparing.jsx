import PropTypes from "prop-types";
import Prepare from "../PrepareItem/Prepare";
const Preparing = ({PreparingArray,TotalCalories}) => {
    return (
        <div>
            <h1>Done:{PreparingArray.length}</h1>
            <div>
                {
                    PreparingArray.map((prepare,idx)=><Prepare TotalCalories={TotalCalories} key={idx} prepare={prepare}></Prepare>)
                }
            </div>
        </div>
    );
};

Preparing.propTypes={
    PreparingArray:PropTypes.array,
    TotalCalories:PropTypes.number
}
export default Preparing;