import "./NavBar.css";
import { MdLocationPin } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useCurrentWeather } from "../../Store";

const NavBar = () => {
  const { setSearchQuery, location } = useCurrentWeather();

  const search = (formData: any) => {
    const words = formData.get("query").trim();
    if (words === "") return;
    setSearchQuery(words);
  };

  return (
    <div>
      <nav className="nav">
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
