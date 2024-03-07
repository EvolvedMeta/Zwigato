import { useState } from "react";
import { LogoLink } from "../utils/urls";
import "../styles/style.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const [loginText, setLoginText] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img className="logoItems" src={LogoLink} />
      </div>
      <div className="nav-items">
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About Us</li></Link>
          <Link to="/contact-us"><li>Contact Us</li></Link>
          <Link to="/cart"><li>Cart Items</li></Link>
          <button
          className="btn btn-primary"
          onClick={() => {
            loginText === "Login"
              ? setLoginText("LogOut")
              : setLoginText("Login");
          }}
        >
          {loginText}
        </button>
        </ul>
      </div>
    </div>
  );
};
