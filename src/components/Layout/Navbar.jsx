import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const authContext = useContext(AuthContext);
  const logout = authContext?.logout || (() => {});

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <h2>🌎 WanderLog</h2>

      <div className="nav-links">
        <Link to="/">Explore</Link>

        <Link to="/bucket-list">
          Bucket List
        </Link>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;