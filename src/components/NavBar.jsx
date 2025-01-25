import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/NavBar.css";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Tienda AMA</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/armas">Armas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/trajes">Trajes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/category/accesorios">Accesorios</NavLink>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
