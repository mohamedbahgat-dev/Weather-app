import "./NavBar.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
  return (
    <div>
      <nav className="nav">
        <div className="logo-container">
          <img
            className="logo-img"
            src="../public/logo.png"
            alt="SkyNow logo"
          />
        </div>
        <div className="location-info">
          <IoLocationOutline size="1.5rem" />
          <h3>Cairo, Egypt</h3>
        </div>
        <form className="search-form">
          <input type="text" placeholder="search for a location" />
          <button className="search-btn" type="submit">
            <IoSearchOutline size="15px" />
          </button>
        </form>
        <div className="notification-icon">
          <IoMdNotifications color="#332D56" size="1.5rem" />
        </div>
        <div className="user-info">
          <FaUser color="gray" size="1.5rem" />
          <h3>Tayseer Mohamed</h3>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
