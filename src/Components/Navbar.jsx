import React from "react";
import watch from "../Static/watch.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div data-testid="navbar" style={{display:"flex",justifyContent:"space-between",margin:"20px"}}>
      <div data-testid="navbar-home-link">
        <img
          src={watch}
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
       <Link to='/Login'> <button data-testid="navbar-login-button">LOGIN</button></Link>
      </div>
    </div>
  );
};

export default Navbar;
