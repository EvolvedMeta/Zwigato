import { LogoLink } from "../utils/urls";
import "../styles/style.css";
import { useState } from "react";

export const Header = () => {
  const [loginText, setLoginText] = useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <img className="logoItems" src={LogoLink} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart Items</li>
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
