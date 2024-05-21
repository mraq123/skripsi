import { NavLink, useNavigate } from "react-router-dom";
import { SiAudiomack } from "react-icons/si";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      alert("Berhasil Logout");
      navigate("/"); // Navigate to the login page
    } catch (error) {
      console.error("Failed to logout:", error);
      // Optionally, handle the error (e.g., display an error message)
    }
  };

  return (
    <div>
      <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <NavLink to={"/dashboard"} className="navbar-item">
            <SiAudiomack style={{ width: "5rem", height: "100%" }} />
          </NavLink>
          {/* 
          <Link
            to={"#"}
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </Link> */}
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button className="button is-light" onClick={Logout}>
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
