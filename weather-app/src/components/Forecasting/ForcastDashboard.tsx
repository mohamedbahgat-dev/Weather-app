import "./ForecastDashboard.css";
import ForecastCard from "./ForecastCard";

const ForecastDashboard = () => {
  return (
    <section className="forecast-board">
      <div className="forecast-btns">
        <button>Today</button>
        <button>Tomorrow</button>
        <button>5 Days</button>
      </div>
      <div className="forecast-cards">
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
        <ForecastCard />
      </div>
    </section>
  );
};

export default ForecastDashboard;
