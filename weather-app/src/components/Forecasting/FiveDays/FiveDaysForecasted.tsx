import "./FiveDaysForcasted.css";
import ForecastCard from "../ForecastCard";
import { useForcastData } from "../../../store";

const FiveDaysForecasted = () => {
  const { forcastedData } = useForcastData();

  return (
    <div className="forecast-cards">
      {forcastedData.slice(0, 5).map((data: any) => (
        <div key={data.date_epoch}>
          <ForecastCard data={data} />
        </div>
      ))}
    </div>
  );
};

export default FiveDaysForecasted;
