import PropTypes from "prop-types";
import Prepare from "../PrepareItem/Prepare";
const Preparing = ({PreparingArray}) => {
    return (
        <div>
            <h1>Done:{PreparingArray.length}</h1>
            <div>
                {
                    PreparingArray.map((prepare,idx)=><Prepare key={idx} prepare={prepare}></Prepare>)
                }
            </div>
        </div>
    );
};

Preparing.propTypes={
    PreparingArray:PropTypes.array,
}
export default Preparing;