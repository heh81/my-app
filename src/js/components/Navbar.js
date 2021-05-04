import React, { useState, useEffect } from "react";
import { MenuItems } from "./MenuItems";

const Navbar = () => {

    const [clicked, setClicked] = useState(false)

    useEffect(() => {

    }, []);

    const handleClick = () => {
        setClicked({ clicked: !clicked })
    }

    return (
        <nav className="navbar">
            <div className="navbar-logo">Nauka angielskiego
            </div>
            <button className="menu-icon navbar-hamburger" onClick={handleClick}>

                <span className="navbar-hamburger-box"><i className={clicked ? "fas fa-times" : "fas fa-bars"}></i></span>

            </button>
            <ul className={clicked ? "navbar-menu active" : "navbar-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>{item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav >
    )

}

export default Navbar;