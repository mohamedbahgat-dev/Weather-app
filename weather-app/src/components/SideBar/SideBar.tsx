import "./SideBar.css";
import { useState } from "react";
import { PiMapPinAreaFill } from "react-icons/pi";
import { RiDashboardFill } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [bgColor, setBgColor] = useState<string>("white");
  const [bgName, setBgName] = useState<string>("Light");

  const changeBgColor = () => {
    const newColor = bgColor === "white" ? "#0E2148" : "white";
    const newName = bgName === "Light" ? "Dark" : "Light";
    setBgColor(newColor);
    setBgName(newName);
    document.body.style.backgroundColor = newColor;
  };

  return (
    <section className="sidebar-container">
      <img className="logo-img" src="../public/logo.png" alt="SkyNow logo" />
      <nav className="dashboard-nav">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "active-nav" : "inactive-nav"
          }
        >
          <RiDashboardFill size={30} color={"white"} />
        </NavLink>

        <NavLink
          to={"/charts"}
          className={({ isActive }) =>
            isActive ? "active-nav" : "inactive-nav"
          }
        >
          <FaChartPie size={30} color={"white"} />
        </NavLink>

        <NavLink
          to={"/map"}
          className={({ isActive }) =>
            isActive ? "active-nav" : "inactive-nav"
          }
        >
          <PiMapPinAreaFill size={30} color={"white"} />
        </NavLink>

     
      </nav>
      <div className="notification-icon">
        <IoMdNotifications color="#332D56" size="1.5rem" />
      </div>
      <div>
        <button className="on-off" onClick={changeBgColor}>
          {bgName === "Light" ? (
            <MdOutlineLightMode color="black" size={20} />
          ) : (
            <MdDarkMode color="black" size={20} />
          )}
        </button>
      </div>
    </section>
  );
};

export default SideBar;
