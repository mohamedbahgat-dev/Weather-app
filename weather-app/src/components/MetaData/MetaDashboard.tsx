import "./MetaDashboard.css";
import { useCurrentWeather } from "../../Store";
import { useEffect, useState } from "react";

const MetaDashboard = () => {
  const { currentWeather } = useCurrentWeather();
  const [metaData, setMetaData] = useState(currentWeather);

  useEffect(() => {
    setMetaData(currentWeather);
  }, [currentWeather]);

  return (
    <section>
      {metaData.length !== 0 ? (
        <div className="meta-dashboard">
          <div>
            <p>Air Quality</p>
            <span>Co level : {metaData.air_quality.co} </span>
          </div>
          <div>
            <p>Wind Speed</p>
            <span>{metaData.wind_mph} mph </span>
          </div>
          <div>
            <p>humidity</p>
            <span>{metaData.humidity}% </span>
          </div>
          <div>
            <p>Visibility</p>
            <span>{metaData.vis_miles} mi </span>
          </div>
          <div>
            <p>Pressure</p>
            <span>{metaData.pressure_in} mi </span>
          </div>
          <div>
            <p>Wind Direction</p>
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
