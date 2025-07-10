import "./ForecastDashboard.css";
import TempForecast from "./Charts/Temprature/TempForecast";
import { FetchForecasted } from "../../Services/FetchData";
import { useState, useRef, useEffect } from "react";
import PercepForcast from "./Charts/Percepitation/PercepForcast";
import FiveDaysForecasted from "./FiveDays/FiveDaysForecasted";
import HumidForcast from "./Charts/Humidity/HumidForcast";
import MinMaxTemp from "./Charts/MinMaxTemprature/MinMaxTemp";
import { useCurrentWeather, useForcastData } from "../../Store.tsx";
import OverDay from "../OverTheDay/OverDay.tsx";

const ForecastDashboard = () => {
  const { forcastedData, setForcastedData } = useForcastData();
  const { searchQuery } = useCurrentWeather();

  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const term = searchQuery ? searchQuery : "paris";

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

  useEffect(() => {
    const getForeCastedtWeather = async () => {
      try {
        const response = await FetchForecasted(term);
        if (!response.ok) {
          setError("Error Fetching Data");
        } else {
          setError("");
          const data = await response.json();
          setForcastedData(data.forecast.forecastday);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occured");
      } finally {
        setIsLoading(false);
      }
    };
    getForeCastedtWeather();
  }, [searchQuery]);

  if (error) {
    return <div>Error getting Data</div>;
  }

  if (isLoading) {
    return <div>...Loading</div>;
  }

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
                <div>
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
                <div>
                  <TempForecast data={forcastedData[1]} />
                  <div className="secondary-charts">
                    <PercepForcast data={forcastedData[1]} />
                    <HumidForcast data={forcastedData[1]} />
                  </div>
                </div>
                <div>
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
