import PropTypes from "prop-types";
const Prepare = ({prepare}) => {
    const {calories,preparing_time,recipe_name}=prepare
    return (
        <div>
            <div className="flex justify-between gap-4 my-5">
                <p>{recipe_name}</p>
                <p>{preparing_time}</p>
                <p>{calories}</p>
            </div>
        </div>
    );
};

Prepare.propTypes={
    prepare:PropTypes.object
}
export default Prepare;