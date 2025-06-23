import MainDashboard from "../MainDashboard/MainDashboard";
import MetaDashboard from "../MetaData/MetaDashboard";

import ForecastDashboard from "../Forecasting/ForcastDashboard";
import "./Home.css";

import NavBar from "../Navigation/NavBar";

const Home = () => {
  return (
    <div className="container">
      <section className="navbar">
        <NavBar />
      </section>
      <section className="main">
        <MainDashboard />
        <MetaDashboard />
      </section>
      <section className="forecast">
        <ForecastDashboard />
      </section>
    </div>
  );
};

export default Home;
