import "./SunMoon.css";
import { FiSunset, FiSunrise } from "react-icons/fi";
import { useAstrodata, useCurrentWeather } from "../../Store";
import { useState, useEffect } from "react";
import { FetchAstroData } from "../../Services/FetchData";

const SunMoon = () => {
  const { searchQuery } = useCurrentWeather();
  const { astroData, setAstroData } = useAstrodata();

  const [error, setError] = useState("");
  const [Isloading, setIsLoading] = useState(true);
  const term = searchQuery ? searchQuery : "paris";

  useEffect(() => {
    const getAstroData = async () => {
      try {
        const response = await FetchAstroData(term);
        if (!response.ok) {
          setError("Error Fetching Data");
        } else {
          setError("");
          const data = await response.json();
          setAstroData(data.astronomy.astro);
        }
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occured");
      } finally {
        setIsLoading(false);
      }
    };
    getAstroData();
  }, [searchQuery]);

  return (
    <section>
      {error ? (
        <div>Error Loading data</div>
      ) : (
        <div>
          {Isloading ? (
            <div>...Loading</div>
          ) : (
            <div className="sun-moon">
              <div className="sunrise">
                <FiSunrise size={40} color={"#edcd02"} />
                <div>
                  <p>Sunrise</p>
                  <h3>{astroData.sunrise}</h3>
                </div>
              </div>
              <div className="sunset">
                <FiSunset size={40} color={"#fd8f30"} />
                <div>
                  <p>Sunset</p>
                  <h3>{astroData.sunset}</h3>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default SunMoon;
