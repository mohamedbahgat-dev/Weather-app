import "./ForecastDashboard.css";
import ForecastCard from "./ForecastCard";
import { useForcastData, useCurrentWeather } from "../../Store";
import { FetchForecasted } from "../../Services/FetchData";
import { useState, useEffect, useRef } from "react";
import TodayForcasted from "./Today/TodayForcasted";
import TomorrowForecasted from "./Tomorrow/TomorrowForecasted";

const ForecastDashboard = () => {
  const { searchQuery } = useCurrentWeather();
  const { forcastedData, setForcastedData } = useForcastData();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [activeToday, setActiveToday] = useState<boolean>(true);
  const [activeTomorrow, setActiveTomorrow] = useState<boolean>(false);

  const todayRef = useRef<any>(null);
  const tomorrowRef = useRef<any>(null);

  const handleTodayWeather = () => {
    todayRef.current.className = "show";
    tomorrowRef.current.className = "hidden";
    setActiveToday(true);
    setActiveTomorrow(false);
  };

  const handleTomorrowWeather = () => {
    todayRef.current.className = "hidden";
    tomorrowRef.current.className = "show";
    setActiveToday(false);
    setActiveTomorrow(true);
  };

  const term = searchQuery ? searchQuery : "paris";

  useEffect(() => {
    const getCurrentWeather = async () => {
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
    getCurrentWeather();
  }, [searchQuery]);

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
        <button>5 Days</button>
      </div>
      <div>
        {error ? (
          <div>{error}</div>
        ) : (
          <div>
            {isLoading ? (
              <div>...Loading</div>
            ) : (
              <div>
                {forcastedData ? (
                  <div className="forecast-board">
                    <div className="show forecast-cards" ref={todayRef}>
                      <TodayForcasted />
                    </div>

                    <div className="hidden forecast-cards" ref={tomorrowRef}>
                      <TomorrowForecasted />
                    </div>
                  </div>
                ) : (
                  <div>Data is Not available</div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ForecastDashboard;
