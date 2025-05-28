import "./SunMoon.css";
import { WiSunset, WiSunrise } from "weather-icons-react";

const SunMoon = () => {
  return (
    <section className="sun-moon">
      <div className="sunrise">
        <WiSunrise size={40} color={"#edcd02"} />
        <div>
          <p>Sunrise</p>
          <h3>05:30 AM</h3>
        </div>
      </div>
      <div className="sunset">
        <WiSunset size={40} color={"#fd8f30"} />
        <div>
          <p>Sunset</p>
          <h3>06:40 PM</h3>
        </div>
      </div>
    </section>
  );
};

export default SunMoon;
