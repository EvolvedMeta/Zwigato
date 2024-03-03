import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./component/Header.js";
import { Body } from "./component/Body.js";

/**
 * Header
 *  -Logo
 *  -Navbar
 * Body
 *  - Search
 *  - Restaurant Container
 *      - Restaurant Card
 *          - Image
 *          - Restaurant Name, Star, Cuisine, Cost , time 
 *          -
 * Footer
 *  - Links
 *  - Address
 *  - Contact
 */

const AppLayout = () => {
    return (
        <div class="app">
            <Header/>
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

