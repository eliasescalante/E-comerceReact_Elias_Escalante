import React from 'react';
import CartWidget from './CartWidget.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/NavBar.css';

const NavBar = () => {
    // NavBar principal con las clases de Bootstrap para que tengan diseño y sea responsive
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Tienda AMA</a>
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
                            <a className="nav-link active" aria-current="page" href="#">Armas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Trajes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Elementos de entrenamientos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Eventos</a>
                        </li>
                    </ul>
                </div>
                <CartWidget />
            </div>
        </nav>
    );
};

export default NavBar;
