import PropTypes from "prop-types";

const Prepare = ({prepare,TotalCalories}) => {
    const {calories,preparing_time,recipe_name}=prepare

    return (
        <div>
            <div className="flex justify-between gap-4 my-5">
                <p>{recipe_name}</p>
                <p>{preparing_time+' min'}</p>
                <p>{calories}</p>
            </div>
            <div className="my-5 text-center">
                <p>{TotalCalories}</p>
            </div>
        </div>
    );
};

Prepare.propTypes={
    prepare:PropTypes.object,
    TotalCalories:PropTypes.number
}
export default Prepare;