import "./OverDay.css";
import { useForcastData } from "../../Store";
import { useEffect } from "react";

const OverDay = () => {
  const { forcastedData } = useForcastData();

  useEffect(() => {
    console.log(forcastedData);
  }, []);

  return (
    <div className="overday-container">
      {forcastedData[0]?.hour.map((cast: any, index: number) => (
        <div className="overday-card" key={cast.time_epoch}>
          <span className="overday-hour">{index + 1}:00</span>

          <div className="overday-symbol">
            <span>T</span>
            <span>H</span>
          </div>

          <div className="overday-value">
            <span>{cast.temp_c}°</span>
            <span>{cast.humidity}%</span>
          </div>

          <img src={cast.condition.icon} alt={cast.condition.text} />
        </div>
      ))}
    </div>
  );
};

export default OverDay;
