import "./OverDay.css";
import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";

const OverDay = (props: any) => {
  return (
    <div className="overday-container">
      {props.data?.hour.map((cast: any, index: number) => (
        <div className="overday-card" key={cast.time_epoch}>
          <span className="overday-hour">{index + 1}:00</span>

          <div className="overday-value">
            <CiTempHigh />
            <span>{cast.temp_c}°</span>
            <span>{cast.humidity}%</span>
            <WiHumidity />
          </div>

          <img src={cast.condition.icon} alt={cast.condition.text} />
        </div>
      ))}
    </div>
  );
};

export default OverDay;
