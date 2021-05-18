import React from "react";
import { MenuItems } from "./MenuItems";
import { NavLink } from "react-router-dom";

const Header = () => {

    function onHamburgerToggle() {
        document.querySelector(".header-nav").classList.toggle("nav-change");
        document.querySelector(".header-list").classList.toggle("navlist-change");
    }

    return (

        <header className="header">
            <div className="container">
                <div className="hamburger-menu">
                    <label>
                        <input type="checkbox" id="hamburgerMenu" onClick={onHamburgerToggle} ></input>
                        <div class="c-checkbox">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </label>
                </div>

                <div className="header-wrapper">
                    <div className="header-logo" id="title">Nauka angielskiego</div>
                    <nav className="header-nav">
                        <ul className="header-list">
                            {MenuItems.map((item) => {
                                return (
                                    <NavLink className={item.cName, "header-list-link"
                                    } to={item.url} key={item.url} > { item.title}
                                    </NavLink>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>

    )
}


export default Header;