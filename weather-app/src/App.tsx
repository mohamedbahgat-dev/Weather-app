import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./Layout";
import TwoWeeksForecast from "./components/Forecasting/WeeksForecasting/TwoWeeksForecast";

import "./App.css";

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="forecast" element={<TwoWeeksForecast />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
      </Routes>
    </Router>
  </>
);

export default App;
