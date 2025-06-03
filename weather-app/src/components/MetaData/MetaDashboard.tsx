import "./MetaDashboard.css";
import { useCurrentWeather } from "../../Store";

const MetaDashboard = () => {
  const { currentWeather } = useCurrentWeather();
  return (
    <section className="meta-dashboard">
      <div className="air-quality">
        <p>Air Quality</p>
        <span>Co poilution: </span>
      </div>
      <div className="wind">
        <p>wind</p>
        <span>2 mph</span>
      </div>
      <div className="humidity">
        <p>Humidity</p>
        <span>40%</span>
      </div>
      <div className="visibility">
        <p>Visibility</p>
        <span>4 mi</span>
      </div>
      <div className="pressure">
        <p>Pressure</p>
        <span>27.79 in</span>
      </div>
      <div className="sea-level">
        <p>Sea level</p>
        <span>1022 hPa</span>
      </div>
    </section>
  );
};

export default MetaDashboard;
