import MainDashboard from "../MainDashboard/MainDashboard";
import MetaDashboard from "../MetaData/MetaDashboard";
import SideBar from "../SideBar/SideBar";
import "./Home.css";
import PolyData from "../PolyData/PolyData";
import NavBar from "../Navigation/NavBar";
import CitiesTemp from "../CitiesTemp/CitiesTemp";
import clearSky from "../../../public/sky.jpg";
import cloudySky from "../../../public/sky2.jpg";
import { useCurrentWeather } from "../../Store";

const Home = () => {
  const { currentWeather } = useCurrentWeather();

  const backGround = () => {
    if (currentWeather.temp_c > 20) {
      return clearSky;
    } else if (currentWeather.temp_c < 20) {
      return cloudySky;
    }
  };

  return (
    <div className="container">
      <section className="sidebar">
        <SideBar />
      </section>
      <section className="navbar">
        <NavBar />
      </section>

      <section className="main">
        <MainDashboard />
        <MetaDashboard />
      </section>
      <section
        className="polydata"
        style={{ backgroundImage: `url(${backGround()})` }}
      >
        <PolyData />
      </section>
      <section
        className="other-cities"
        style={{ backgroundImage: `url(${backGround()})` }}
      >
        <CitiesTemp />
      </section>
    </div>
  );
};

export default Home;
