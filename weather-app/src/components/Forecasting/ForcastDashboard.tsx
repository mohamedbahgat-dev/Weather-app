import "./ForecastDashboard.css";
import TempForecast from "./Charts/Temprature/TempForecast";
import { useState, useRef } from "react";
import PercepForcast from "./Charts/Percepitation/PercepForcast";
import FiveDaysForecasted from "./FiveDays/FiveDaysForecasted";
import HumidForcast from "./Charts/Humidity/HumidForcast";
import MinMaxTemp from "./Charts/MinMaxTemprature/MinMaxTemp";
import { useForcastData } from "../../Store.tsx";

import OverDay from "../OverTheDay/OverDay.tsx";

const ForecastDashboard = () => {
  const { forcastedData } = useForcastData();

  const [activeToday, setActiveToday] = useState<boolean>(true);
  const [activeTomorrow, setActiveTomorrow] = useState<boolean>(false);
  const [activeFiveDays, setActiveFiveDays] = useState<boolean>(false);

  const todayRef = useRef<any>(null);
  const tomorrowRef = useRef<any>(null);
  const FiveDaysRef = useRef<any>(null);

  const handleTodayWeather = () => {
    todayRef.current.className = "show";
    tomorrowRef.current.className = "hidden";
    FiveDaysRef.current.className = "hidden";
    setActiveToday(true);
    setActiveTomorrow(false);
    setActiveFiveDays(false);
  };

  const handleTomorrowWeather = () => {
    todayRef.current.className = "hidden";
    tomorrowRef.current.className = "show";
    FiveDaysRef.current.className = "hidden";
    setActiveToday(false);
    setActiveTomorrow(true);
    setActiveFiveDays(false);
  };

  const handleFiveDaysWeather = () => {
    todayRef.current.className = "hidden";
    tomorrowRef.current.className = "hidden";
    FiveDaysRef.current.className = "show";
    setActiveToday(false);
    setActiveTomorrow(false);
    setActiveFiveDays(true);
  };

  return (
    <section className="forecast-board">
      <div className="forecast-btns">
        <button
          onClick={handleTodayWeather}
          style={
            activeToday
              ? { backgroundColor: "#f2811e", color: "white" }
              : { backgroundColor: "wheat" }
          }
        >
          Today
        </button>
        <button
          onClick={handleTomorrowWeather}
          style={
            activeTomorrow
              ? { backgroundColor: "#f2811e", color: "white" }
              : { backgroundColor: "wheat" }
          }
        >
          Tomorrow
        </button>
        <button
          onClick={handleFiveDaysWeather}
          style={
            activeFiveDays
              ? { backgroundColor: "#f2811e", color: "white" }
              : { backgroundColor: "wheat" }
          }
        >
          3 days forecast
        </button>
      </div>
      <div>
        <div>
          {forcastedData ? (
            <div className="forecast-board">
              <div className="show" ref={todayRef}>
                <div className="charts-board">
                  <TempForecast data={forcastedData[0]} />
                  <div className="secondary-charts">
                    <PercepForcast data={forcastedData[0]} />
                    <HumidForcast data={forcastedData[0]} />
                  </div>
                </div>
                <div className="overday-dash">
                  <OverDay data={forcastedData[0]} />
                </div>
              </div>

              <div className="hidden" ref={tomorrowRef}>
                <div className="charts-board">
                  <TempForecast data={forcastedData[1]} />
                  <div className="secondary-charts">
                    <PercepForcast data={forcastedData[1]} />
                    <HumidForcast data={forcastedData[1]} />
                  </div>
                </div>
                <div className="overday-dash">
                  <OverDay data={forcastedData[1]} />
                </div>
              </div>

              <div className="hidden" ref={FiveDaysRef}>
                <FiveDaysForecasted />
                <div className="min-max-temp">
                  <MinMaxTemp />
                </div>
              </div>
            </div>
          ) : (
            <div>Data is Not available</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ForecastDashboard;
