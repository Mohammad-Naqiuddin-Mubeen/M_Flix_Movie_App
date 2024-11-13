import { React } from "react";
import "./Styles/NavBar.css"
import Year from "./Year";
import Search from "./Search";
const NavBar = () => {
  return (
    <>
      <div className="NavbarIcons">
        <Search/>
        <i className="bi bi-house-door"></i>
        <Year/>
        <i className="bi bi-display"></i>
        <i className="bi bi-film"></i>
        <i className="bi bi-plus"></i>
      </div>
    </>
  );
};

export default NavBar;
