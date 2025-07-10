import "./Map.css";
import SideBar from "../SideBar/SideBar";
import NavBar from "../Navigation/NavBar";
import GoogleMps from "./GoogleMps";

const Map = () => {
  return (
    <div className="map-dashboard">
      <section className="map-navbar">
        <NavBar />
      </section>
      <section className="map-sidebar">
        <SideBar />
      </section>
      <section className="map">
        <GoogleMps />
      </section>
    </div>
  );
};

export default Map;
