import { useEffect, useState } from "react";
import "./CitiesTemp.css";
import CityTemp from "./CityTemp";

const CitiesTemp = () => {
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    setCities(["london", "NY", "bejing", "cairo", "RIO", "dubai"]);
  }, []);

  return (
    <div className="cities-container">
      {cities.map((city, index) => (
        <div key={index}>
          <CityTemp city={city} />
        </div>
      ))}
    </div>
  );
};

export default CitiesTemp;
