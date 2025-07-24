import MainDashboard from "../MainDashboard/MainDashboard";
import MetaDashboard from "../MetaData/MetaDashboard";
import SideBar from "../SideBar/SideBar";
import "./Home.css";
import PolyData from "../PolyData/PolyData";
import NavBar from "../Navigation/NavBar";
import CitiesTemp from "../CitiesTemp/CitiesTemp";
import nightSky from "../../assets/nightsky.jpg";
import { Mood } from "../../Store";
import clearSky from "../../assets/sky.jpg";
import { useCurrentWeather } from "../../Store";
import Loader from "../Loader/Loader";

const Home = () => {
  const { isDark } = Mood();
  const { currentWeather } = useCurrentWeather();

  return (
    <div className="outer-container">
      {currentWeather ? (
        <div className="container">
          <section className="sidebar">
            <SideBar />
          </section>
          <section className="navbar">
            <NavBar />
          </section>

          <section className="main">
            <MainDashboard />
          </section>
          <section className="meta">
            <MetaDashboard />
          </section>
          <section
            className="polydata"
            style={
              isDark
                ? {
                    backgroundImage: `url(${nightSky})`,
                    color: "white",
                    boxShadow: "3px 3px 5px #31353ab4",
                  }
                : { backgroundImage: `url(${clearSky})` }
            }
          >
            <PolyData />
          </section>
          <section
            className="other-cities"
            style={
              isDark
                ? {
                    backgroundImage: `url(${nightSky})`,
                    color: "white",
                    boxShadow: "3px 3px 5px #31353ab4",
                  }
                : { backgroundImage: `url(${clearSky})` }
            }
          >
            <CitiesTemp />
          </section>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
