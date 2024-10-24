import PropTypes from "prop-types";
const Calorie = ({calorie}) => {
    const {calories,preparing_time,recipe_name}=calorie
    return (
        <div className="flex justify-between gap-4 my-5">
            <p>{recipe_name}</p>
            <p>{preparing_time}</p>
            <p>{calories}</p>
            <button className="btn bg-green-600 text-black text-md font-bold">Preparing</button>
        </div>
    );
};

Calorie.propTypes={
    calorie: PropTypes.object
}
export default Calorie;