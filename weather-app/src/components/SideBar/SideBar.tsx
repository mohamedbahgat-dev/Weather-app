import "./SideBar.css";
import { useState } from "react";
import { PiMapPinAreaFill } from "react-icons/pi";
import { RiDashboardFill } from "react-icons/ri";
import { FaChartPie } from "react-icons/fa";
import { IoCalendarNumber } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

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
    <section
      className="sidebar-container"
      style={
        bgName === "Light"
          ? { backgroundColor: "#fbf4db" }
          : { backgroundColor: "#F8B55F" }
      }
    >
      <div className="logo-container">
        <img className="logo-img" src="../public/logo.png" alt="SkyNow logo" />
      </div>
      <nav className="dashboard-nav">
        <RiDashboardFill size={30} color={"gray"} />
        <FaChartPie size={30} color={"gray"} />
        <PiMapPinAreaFill size={30} color={"gray"} />
        <IoCalendarNumber size={30} color={"gray"} />
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
