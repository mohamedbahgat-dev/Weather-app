import "./ForecastCard.css";
import { WiCloud } from "react-icons/wi";

const ForecastCard = () => {
  return (
    <section className="forecast-item">
      <div className="condition">
        <WiCloud size={30} />
        <div>
          <p>1 AM</p>
          <p>cloudy, clear</p>
        </div>
      </div>
      <div className="weather">
        <h3>18 °C</h3>
        <div>
          <p>wind: 120Km</p>
          <p>Humidity: 40%</p>
        </div>
      </div>
    </section>
  );
};

export default ForecastCard;
