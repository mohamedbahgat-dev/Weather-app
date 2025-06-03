import "./NavBar.css";
import { IoLocationOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { useState } from "react";
import { useCurrentWeather } from "../../Store";

const NavBar = () => {
  const { setSearchQuery } = useCurrentWeather();

  const [bgColor, setBgColor] = useState<string>("white");
  const [bgName, setBgName] = useState<string>("Light");

  const changeBgColor = () => {
    const newColor = bgColor === "white" ? "#0E2148" : "white";
    const newName = bgName === "Light" ? "Dark" : "Light";
    setBgColor(newColor);
    setBgName(newName);
    document.body.style.backgroundColor = newColor;
  };

  const search = (formData: any) => {
    const words = formData.get("query").trim();
    setSearchQuery(words);
  };

  return (
    <div>
      <nav
        className="nav"
        style={
          bgName === "Light"
            ? { backgroundColor: "#fbf4db" }
            : { backgroundColor: "#F8B55F" }
        }
      >
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
        <form action={search}>
          <input type="text" placeholder="search for a location" name="query" />
          <button className="search-btn" type="submit">
            <IoSearchOutline size="15px" />
            Search
          </button>
        </form>

        <div className="notification-icon">
          <IoMdNotifications color="#332D56" size="1.5rem" />
        </div>
        <div className="theme-icon">
          {bgName === "Light" ? <MdOutlineLightMode /> : <MdDarkMode />}
          <button onClick={changeBgColor}>{bgName}</button>
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
