import { FaRegCircleUser } from "react-icons/fa6";
import './NavBar.css'
const NavBar = () => {
    return (
        <div>
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
            <div className="bannerMain px-12 space-y-4 text-center bg-cover rounded-lg">
                <h1 className="text-5xl text-white font-bold pt-20">Discover an exceptional cooking class tailored for you!</h1>
                <h2 className="text-2xl text-white">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</h2>
                <div className="flex justify-center items-center gap-9 pb-20">
                    <button className="btn btn-lg px-12 py-4 rounded-full text-xl font-bold bg-green-600 text-white">Explore Now</button>
                    <button className="btn btn-lg px-12 py-4 rounded-full text-xl font-bold border-2 border-white text-white">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;