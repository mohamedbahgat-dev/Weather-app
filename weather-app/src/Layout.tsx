import { Outlet } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar";

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
