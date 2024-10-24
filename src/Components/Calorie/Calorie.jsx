import PropTypes from "prop-types";
const Calorie = ({calorie,handlePrepareBtn}) => {
    const {calories,preparing_time,recipe_name,recipe_id}=calorie
    return (
        <div className="flex justify-between gap-4 my-5">
            <p>{recipe_name}</p>
            <p>{preparing_time+' min'}</p>
            <p>{calories}</p>
            <button onClick={()=>handlePrepareBtn(calorie,recipe_id,calories)} className="btn bg-green-600 text-black text-md font-bold">Preparing</button>
        </div>
    );
};

Calorie.propTypes={
    calorie: PropTypes.object,
    handlePrepareBtn:PropTypes.func
}
export default Calorie;