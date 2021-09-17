import React, { useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import logo from "../../logo.png";

export const Navbar = () => {
  const {
    user: { name },
    dispatch,
  } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    history.replace("/login");

    dispatch({
      type: types.logout,
    });
  };

  return (
    <nav className="barra-nav">
      
      <div className="nav1">
        <Link className="navbar-brand" to="/">
            <img id="logo" src={logo} alt="logo" className="animate__animated animate__fadeInLeft"></img>
        </Link>
        <h2 className=" animate__animated animate__fadeInDown">HEROES</h2>
      </div>

      <div className="nav2">


            <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/marvel"
            >
                Marvel
            </NavLink>

            <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/dc"
            >
                DC Comics
            </NavLink>

            <NavLink
                activeClassName="active"
                className="nav-item nav-link"
                exact
                to="/search"
            >
                Search
            </NavLink>

            <button className="nav-item nav-link btn" onClick={handleLogout}>
                    Logout
                </button>
      </div>
      

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">{name}</span>

          
        </ul>
      </div>
    </nav>
  );
};
