import { MdLocationPin } from "react-icons/md";
import { useCurrentWeather } from "../../Store";
import { useEffect, useState } from "react";

const Location = () => {
  const { location } = useCurrentWeather();

  const [city, setCity] = useState<string>("");
  const [country, setCountry] = useState<string>("");

  useEffect(() => {
    setCity(location.name);
    setCountry(location.country);
  }, [location]);
  return (
    <div>
      <div className="location-info">
        <MdLocationPin size={25} color="#e96058" />
        <h3>
          {location ? (
            <div>
              {city}, {country}
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
