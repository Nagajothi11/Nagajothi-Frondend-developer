
import React, { useState, useEffect } from "react";
import logo from "../logo.png"
import { Link } from 'react-router-dom'

function Header() {
    const [menu, setMenu] = useState({
        product: false,
        blog: false,
        about: false,
        contact: false
    });

    useEffect(() => {

    }, [])
    return (
        <div className="header" >
            <div className="top-container">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link to="/" className="navbar-brand" href="#">
                            <img src={logo} className="img-fluid logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ml-auto" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a href="#about"
                                    className={`nav-link ${menu.about ? 'active' : null} menu-text`} s
                                    onClick={() => setMenu({
                                        product: false,
                                        blog: false,
                                        contact: false,
                                        about: true
                                    })}
                                >
                                    About
                                </a>
                                <a href="#product"
                                    className={`nav-link ${menu.product ? 'active' : null} menu-text`}
                                    onClick={() => setMenu({

                                        product: true,
                                        blog: false,
                                        contact: false,
                                        about: false
                                    })}>
                                    Product
                                </a>
                                <a href="#blog"
                                    className={`nav-link ${menu.blog ? 'active' : null} menu-text`}
                                    onClick={() => setMenu({

                                        blog: true,
                                        product: false,
                                        contact: false,
                                        about: false
                                    })}>
                                    Blog
                                </a>
                                <a href="#contact"
                                    className={`nav-link ${menu.contact ? 'active' : null} menu-text`} s
                                    onClick={() => setMenu({
                                        product: false,
                                        blog: false,
                                        about: false,
                                        contact: true
                                    })}>
                                    Contact
                                </a>

                            </div>
                        </div>
                    </div>
                </nav>
            </div >
        </div >
    );
}

export default Header;
