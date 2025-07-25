import "./TwoWeeksForecast.css";
import { useForcastData } from "../../../store";
import { useEffect, useState } from "react";
import ForecastCard from "../ForecastCard";

const TwoWeeksForecast = () => {
  const { forcastedData } = useForcastData();

  const [datetime, setDatetime] = useState<Date>(new Date());

  useEffect(() => {
    setDatetime(new Date());
  }, [ForecastCard]);

  const daysOfWeek: any = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div>
      <section>
        <h2>14-day forecast</h2>
        <div className="day-date">
          {forcastedData.map((castData: any) => (
            <div key={castData.date_epoch} className="cast-container">
              <div className="maxtemp-container">
                <div
                  style={
                    datetime.getDate() ===
                    new Date(castData.date_epoch * 1000).getDate()
                      ? {
                          backgroundColor: "#0074D9",
                          color: "white",
                          paddingInline: "5px",
                          borderRadius: "10px",
                        }
                      : { backgroundColor: "transparent" }
                  }
                >
                  <h3>
                    {
                      daysOfWeek[
                        new Date(castData.date_epoch * 1000)
                          .getDay()
                          .toLocaleString()
                      ]
                    }
                  </h3>
                  <p>
                    {new Date(castData.date_epoch * 1000).getMonth() + 1}/
                    {new Date(castData.date_epoch * 1000).getDate()}
                  </p>
                </div>
                <img src={castData.day.condition.icon} alt="condition icon" />
                <h3>{castData.day.maxtemp_c}°</h3>
              </div>
              <div className="mintemp-container">
                <h3>{castData.day.mintemp_c}°</h3>
                <img src={castData.hour[1].condition.icon} alt="icon" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TwoWeeksForecast;
