import "./MetaDashboard.css";
import { useCurrentWeather } from "../../store.ts";
import { useEffect, useState } from "react";
import { PiPlant } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";
import { LuCircleGauge } from "react-icons/lu";
import clearSky from "../../assets/sky.jpg";
import nightSky from "../../assets/nightsky.jpg";
import { Mood } from "../../store.ts";

const MetaDashboard = () => {
  const { currentWeather } = useCurrentWeather();
  const [metaData, setMetaData] = useState(currentWeather);
  const { isDark } = Mood();

  useEffect(() => {
    setMetaData(currentWeather);
  }, [currentWeather]);

  return (
    <section>
      {metaData.length !== 0 ? (
        <div
          className="meta-dashboard"
          style={
            isDark
              ? {
                  backgroundImage: `url(${nightSky})`,
                  color: "white",
                  boxShadow: "3px 3px 5px #31353ab4",
                }
              : { backgroundImage: `url(${clearSky})` }
          }
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
              <p>WND (v)</p>
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
              <p>Wind dir</p>
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
