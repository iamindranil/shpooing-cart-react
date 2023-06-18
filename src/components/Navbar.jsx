import{FaShoppingCart} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500">
      <div className="flex flex-row justify-between">
        <NavLink to='/'>
        <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKL3tITu46bvIFNMBAWoOqpA9j1crMTkZdJA&usqp=CAU"/>

        </div>
        </NavLink>
        <div>
          <NavLink to='/'>
          <p>Home</p>
          </NavLink>
          <NavLink to='/cart'>
            <div>
            <FaShoppingCart/>
            </div>
          </NavLink>
          
        </div>
      </div>
    </div>
  )
};

export default Navbar;
