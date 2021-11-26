import React, { useState } from 'react';
import "./Nav.scss";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Nav() {
    const [navBlack, setNavBlack] = useState(false);
    const [toggleMenu, setToggleNenu] = useState(false);
    const transitionNav = () => {
        window.scrollY > 100 ? setNavBlack(true) : setNavBlack(false)
    };
    useState(() => {
        document.addEventListener("scroll", transitionNav);
    })
    const handleClick = () => {
        toggleMenu ? setToggleNenu(false) : setToggleNenu(true);
    }
    return (
        <div className={`nav ${navBlack || toggleMenu ? "nav--black" : "nav--transparent"} ${toggleMenu && "show"}`}>
            <div className="nav__burger" onClick={handleClick}>
                <MenuIcon />
            </div>
            <span className="nav__logo">Netflux</span>
            <nav className="nav__links">
                <a href="/" className="nav__link">Accueil</a>
                <a href="/" className="nav__link">Séries</a>
                <a href="/" className="nav__link">Films</a>
            </nav>
            <div className="nav__actions">
                <a href="/" className="nav__action"><SearchIcon /></a>
                <a href="/" className="nav__action">DIRECT</a>
                <a href="/" className="nav__action"><CardGiftcardIcon /></a>
                <a href="/" className="nav__action"><NotificationsIcon /></a>
                <a href="/" className="nav__action"><img className="nav__img" src="../../images/avatar.jpg" alt="logo avatar" /></a>
            </div>
        </div>
    )
}

export default Nav
