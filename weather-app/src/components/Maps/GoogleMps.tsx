import "./GoogleMap.css";
import { useCurrentWeather } from "../../Store";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import { useEffect, useState } from "react";

const GoogleMps = () => {
  const { location, currentWeather } = useCurrentWeather();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    console.log(location.lon);
  });
  const MyAPI: any = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const MyMapID = import.meta.env.VITE_GOOGLE_MAP_ID;
  const position: any = {
    lat: location.lat,
    lng: location.lon,
  };

  return (
    <APIProvider apiKey={MyAPI}>
      <div className="map-container">
        <Map zoom={10} center={position} mapId={MyMapID}>
          <AdvancedMarker position={position} onClick={() => setOpen(true)}>
            <Pin
              background={"orange"}
              borderColor={"gray"}
              glyphColor={"green"}
            />
          </AdvancedMarker>

          {open && (
            <InfoWindow
              position={position}
              className="info-window"
              onCloseClick={() => setOpen(false)}
            >
              <p>Temprature: {currentWeather.temp_c}°C</p>
              <p>humidity: {currentWeather.humidity}%</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
};

export default GoogleMps;
