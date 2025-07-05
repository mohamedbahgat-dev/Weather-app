import "./ChartsPage.css";
import SideBar from "../SideBar/SideBar";
import ForecastDashboard from "../Forecasting/ForcastDashboard";
import NavBar from "../Navigation/NavBar";
import OverDay from "../OverTheDay/OverDay";

const ChartsPage = () => {
  return (
    <div className="charts-dashboard">
      <section className="navbar">
        <NavBar />
      </section>
      <section className="sidebar">
        <SideBar />
      </section>
      <section className="forecasted-dash">
        <ForecastDashboard />
      </section>
      <section className="overday-dashboard">
        <OverDay />
      </section>
    </div>
  );
};

export default ChartsPage;
