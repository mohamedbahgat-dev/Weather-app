import NavBar from "./components/Navigation/NavBar";
import MainDashboard from "./components/MainDashboard/MainDashboard";
import MetaDashboard from "./components/MetaData/MetaDashboard";
import SunMoon from "./components/SunMoonSummary/SunMoon";
import ForecastDashboard from "./components/Forecasting/ForcastDashboard";
import "./App.css";

const App = () => (
  <div className="container">
    <section className="navbar">
      <NavBar />
    </section>
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

export default App;
