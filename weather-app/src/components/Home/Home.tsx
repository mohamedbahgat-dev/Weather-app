import MainDashboard from "../MainDashboard/MainDashboard";
import MetaDashboard from "../MetaData/MetaDashboard";
import SunMoon from "../SunMoonSummary/SunMoon";
import ForecastDashboard from "../Forecasting/ForcastDashboard";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <section className="main">
        <MainDashboard />
        <MetaDashboard />
        <SunMoon />
      </section>
      <section className="forecast">
        <ForecastDashboard />
      </section>
    </div>
  );
};

export default Home;
