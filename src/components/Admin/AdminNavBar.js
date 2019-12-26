import React from "react";
import { Link } from "react-router-dom";
function BorrowerNavBar() {
  return (
    <div className='nav'>
      <ul>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/" className="nav-link">
          Log Out
        </Link>
      </ul>
    </div>
  );
}

export default BorrowerNavBar;
