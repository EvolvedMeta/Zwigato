import { useState } from "react";
import { LogoLink } from "../utils/urls";
import "../styles/style.css";
import { Link } from "react-router-dom";

export const Header = () => {
  const [loginText, setLoginText] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <Link to="/"><img className="logoItems" src={LogoLink} /></Link>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact-us">Contact Us</Link></li>
          <li><Link to="/cart">Cart Items</Link></li>
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
