import "./Location.css";
import { MdLocationPin } from "react-icons/md";
import { useCurrentWeather } from "../../store";

const Location = () => {
  const { location } = useCurrentWeather();
  return (
    <div>
      <div className="location-info">
        <MdLocationPin size={25} color="#e96058" />
        <h3>
          {location ? (
            <div>
              {location.name}, {location.country}
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
