import "./OverDayHumidity.css";
import { useForcastData } from "../../Store";

const OverDayHumidity = () => {
  const { forcastedData } = useForcastData();
  return <div>OverDayHumidity</div>;
};

export default OverDayHumidity;
