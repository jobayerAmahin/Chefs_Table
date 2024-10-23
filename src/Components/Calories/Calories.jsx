import PropTypes from "prop-types";
const Calories = ({WantToCook}) => {
    return (
        <div>
            <h1>Calories:{WantToCook}</h1>
        </div>
    );
};
Calories.propTypes={
    WantToCook:PropTypes.number
}
export default Calories;