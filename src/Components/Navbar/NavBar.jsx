import { FaRegCircleUser } from "react-icons/fa6";
const NavBar = () => {
    return (
        <div className="flex justify-between">
            <h1>Recipe Calories</h1>
            <div>
                <ul className="flex justify-evenly">
                    <li>Home</li>
                    <li>Recipies</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className="flex justify-evenly">
                <input type="search" name="" id="" />
                <FaRegCircleUser></FaRegCircleUser>
            </div>
        </div>
    );
};

export default NavBar;