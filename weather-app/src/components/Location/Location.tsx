import "./Location.css";
import { MdLocationPin } from "react-icons/md";
import { useCurrentWeather } from "../../Store";
import { useState, useEffect } from "react";

const Location = () => {
  const { location } = useCurrentWeather();

  const [currentLocation, setCurrentLocation] = useState<any>("");

  useEffect(() => {
    setCurrentLocation(location);
  });

  return (
    <div>
      <div className="location-info">
        <MdLocationPin size={25} color="#e96058" />
        <h3>
          {location ? (
            <div>
              {currentLocation.name}, {currentLocation.country}
            </div>
          ) : (
            <div>Location not found</div>
          )}
        </h3>
      </div>
    </div>
  );
};

export default Location;
