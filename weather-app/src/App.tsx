import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ChartsPage from "./components/ChartsPage/ChartsPage";
import "./App.css";

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="charts" element={<ChartsPage />} />
        </Route>
      </Routes>
    </Router>
  </>
);

export default App;
