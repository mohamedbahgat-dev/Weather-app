import "./MetaDashboard.css";
import { useCurrentWeather } from "../../Store";
import { useEffect, useState } from "react";
import { PiPlant } from "react-icons/pi";
import { WiWindDeg, WiStrongWind } from "weather-icons-react";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";
import { LuCircleGauge } from "react-icons/lu";
import clearSky from "../../../public/sky.jpg";
import cloudySky from "../../../public/sky2.jpg";

const MetaDashboard = () => {
  const { currentWeather } = useCurrentWeather();
  const [metaData, setMetaData] = useState(currentWeather);

  useEffect(() => {
    setMetaData(currentWeather);
  }, [currentWeather]);

  const backGround = () => {
    if (currentWeather.temp_c > 20) {
      return clearSky;
    } else if (currentWeather.temp_c < 20) {
      return cloudySky;
    }
  };

  return (
    <section>
      {metaData.length !== 0 ? (
        <div
          className="meta-dashboard"
          style={{ backgroundImage: `url(${backGround()})` }}
        >
          <div className="items-container">
            <div className="item-name">
              <p>CO level</p>
              <PiPlant size={20} color={"green"} />
            </div>
            <span> {metaData.air_quality.co} </span>
          </div>

          <div className="items-container">
            <div className="item-name">
              <p>Wind Speed</p>
              <WiStrongWind size={30} color={"#3674B5"} />
            </div>
            <span>{metaData.wind_mph} </span>mPh
          </div>

          <div className="items-container">
            <div className="item-name">
              <p>humidity</p>
              <WiHumidity size={30} color={"#3674B5"} />
            </div>
            <span>{metaData.humidity}% </span>
          </div>

          <div className="items-container">
            <div className="item-name">
              <p>Visibility</p>
              <MdOutlineVisibility size={20} />
            </div>
            <span>{metaData.vis_miles}</span> mi
          </div>

          <div className="items-container">
            <div className="item-name">
              <p>Pressure</p>
              <LuCircleGauge size={20} color="#FF4F0F" />
            </div>
            <span>{metaData.pressure_in} </span>in
          </div>

          <div className="items-container">
            <div className="item-name">
              <p>Wind Direction</p>
              <WiWindDeg size={20} />
            </div>
            <span>{metaData.wind_dir} </span>
          </div>
        </div>
      ) : (
        <div>..Loading</div>
      )}
    </section>
  );
};

export default MetaDashboard;
