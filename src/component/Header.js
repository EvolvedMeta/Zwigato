import { LogoLink } from "../utils/urls"
import '../styles/style.css';
export const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}