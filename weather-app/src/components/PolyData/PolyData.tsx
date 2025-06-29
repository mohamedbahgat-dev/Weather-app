import "./PolyData.css";
import { useCurrentWeather } from "../../Store";
import { FaCloud } from "react-icons/fa";
import { BsCloudRain } from "react-icons/bs";
import { LuWindArrowDown } from "react-icons/lu";
import { GiRadiations } from "react-icons/gi";
import SunMoon from "../SunMoonSummary/SunMoon";

const PolyData = () => {
  const { currentWeather } = useCurrentWeather();

  return (
    <div className="polydata-container">
      <section className="polydata-dashboard">
        <section className="poly-item rain-chance">
          <p>Chance of rain</p>
          <p className="rain-percentage">{currentWeather.precip_mm}</p>
          <BsCloudRain color="white" size={25} className="poly-icons" />
        </section>
        <section className="poly-item uv-index">
          <p>UV Index</p>
          <p>{currentWeather.uv}</p>
          <GiRadiations color="white" size={25} className="poly-icons" />
        </section>
        <section className="poly-item cloud">
          <p>Cloud coverage</p>
          <p>{currentWeather.cloud}%</p>
          <FaCloud color="white" size={25} className="poly-icons" />
        </section>
        <section className="poly-item wind-degree">
          <p>Wind degree</p>
          <p>{currentWeather.wind_degree}</p>
          <LuWindArrowDown color="white" size={25} className="poly-icons" />
        </section>
      </section>

      <section className="sunmoon-container">
        <SunMoon />
      </section>
    </div>
  );
};

export default PolyData;
