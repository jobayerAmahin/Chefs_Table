
import PropTypes from 'prop-types';
const Recipe = ({recipie,handleCookBtn}) => {
    const {short_description,calories,preparing_time,ingredients_array,recipe_name,img}=recipie
    return (
        <div>
            <div>
                <img className='h-30 w-60' src={img} alt="" />
                <h1>{recipe_name}</h1>
                <p>{short_description}</p>
                <div>
                    <h1>Ingredients:{ingredients_array.length}</h1>
                    <ul>
                        {
                            ingredients_array.map((ing,idx)=> <li key={idx}>{ing}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <h2>{preparing_time}</h2>
                    <h2>{calories}</h2>
                </div>
                <button onClick={()=>handleCookBtn(recipie)} className='btn bg-green-500 btn-md text-white text-lg font-bold'>Want to Cook</button>
            </div>
        </div>
    );
};
Recipe.propTypes={
    recipie:PropTypes.object,
    handleCookBtn:PropTypes.func
}
export default Recipe;