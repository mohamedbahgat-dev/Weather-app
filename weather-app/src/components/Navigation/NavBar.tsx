import "./NavBar.css";
import { IoSearchOutline } from "react-icons/io5";
import { useCurrentWeather } from "../../store.ts";
import Location from "../Location/Location";
import { Mood } from "../../store.ts";

const NavBar = () => {
  const { setSearchQuery } = useCurrentWeather();
  const { isDark } = Mood();

  const search = (formData: any) => {
    const words = formData.get("query").trim();
    if (words === "") return;
    setSearchQuery(words);
  };

  return (
    <div>
      <nav className="nav">
        <Location />
        <form
          style={
            isDark
              ? { backgroundColor: "white" }
              : { backgroundColor: "#e6e6e69b" }
          }
          className="search-form"
          action={search}
        >
          <input type="text" placeholder="city/country" name="query" />
          <button className="search-btn" type="submit">
            <IoSearchOutline size="15px" />
          </button>
        </form>
      </nav>
    </div>
  );
};

export default NavBar;
