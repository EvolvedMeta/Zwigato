import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Header } from "./component/Header.js";
import { Body } from "./component/Body.js";
import About from "./component/About.js";
import Contact from "./component/Contact.js";
import { CartItems } from "./component/CartItems.js";
import ErrorPage from "./component/ErrorPage.js";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />
    },
    {
        path: "/contact-us",
        element: <Contact />,
        errorElement: <ErrorPage />
    },
    {
        path: "/cart",
        element: <CartItems />,
        errorElement: <ErrorPage />
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

