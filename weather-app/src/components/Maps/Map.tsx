import "./Map.css";
import SideBar from "../SideBar/SideBar";

import GoogleMps from "./GoogleMps";

const Map = () => {
  return (
    <div className="map-dashboard">
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
