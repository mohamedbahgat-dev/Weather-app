import "./NavBar.css";
import { IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useCurrentWeather } from "../../Store";
import Location from "../Location/Location";

const NavBar = () => {
  const { setSearchQuery } = useCurrentWeather();

  const search = (formData: any) => {
    const words = formData.get("query").trim();
    if (words === "") return;
    setSearchQuery(words);
  };

  return (
    <div>
      <nav className="nav">
        <Location />
        <form className="search-form" action={search}>
          <input type="text" placeholder="search for a city..." name="query" />
          <button className="search-btn" type="submit">
            <IoSearchOutline size="15px" />
          </button>
        </form>
        <div className="user-info">
          <FaUser className="user-icon" color="gray" size={20} />
          <h3>Tayseer Mohamed</h3>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
