import "./PolyData.css";
import { useCurrentWeather } from "../../Store";

const PolyData = () => {
  const { currentWeather } = useCurrentWeather();

  return (
    <section className="polydata-dashboard">
      <section className="poly-item rain-chance">
        <p>Chance of rain</p>
        <p>{currentWeather.precip_mm}</p>
      </section>
      <section className="poly-item uv-index">
        <p>UV Index</p>
        <p>{currentWeather.uv}</p>
      </section>
      <section className="poly-item cloud">
        <p>Cloud coverage</p>
        <p>{currentWeather.cloud}%</p>
      </section>
      <section className="poly-item wind-degree">
        <p>Wind degree</p>
        <p>{currentWeather.wind_degree}</p>
      </section>
    </section>
  );
};

export default PolyData;
