import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <h1> Little Italy </h1>
      <ul className="navbar-links">
        <div className="left-side-Navbar">
          <li>
            <Link to="/"> Home</Link>
          </li>
        </div>

        {/* <div className="right-side-Navbar">
          <li className="newTimesheet">
            <Link to="/create-timesheet"> New Timesheet </Link>
          </li>
        </div> */}
      </ul>
    </nav>
  );
}
