import "./TwoWeeksForecast.css";
import { useForcastData } from "../../../Store";
import { useEffect, useState } from "react";

const TwoWeeksForecast = () => {
  const { forcastedData } = useForcastData();

  const [datetime, setDatetime] = useState<Date>(new Date());

  useEffect(() => {
    setDatetime(new Date());
  });

  const daysOfWeek: any = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    console.log(forcastedData);
  });

  return (
    <div>
      <section>
        <h2>14-day forecast</h2>
        <div className="day-date">
          {forcastedData.map((castData: any) => (
            <div
              key={castData.date_epoch}
              style={
                datetime.getDate() ===
                new Date(castData.date_epoch * 1000).getDate()
                  ? { backgroundColor: "#0074D9" }
                  : { backgroundColor: "white" }
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
          ))}
        </div>
      </section>
    </div>
  );
};

export default TwoWeeksForecast;
