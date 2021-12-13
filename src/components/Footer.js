import React from 'react';
import "./footer.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import tmdbLogo from '../assets/tmdb-logo.svg';

function footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__socials">
                    <a href="/" className="footer__social"><FacebookIcon /></a>
                    <a href="/" className="footer__social"><InstagramIcon /></a>
                    <a href="/" className="footer__social"><TwitterIcon /></a>
                    <a href="/" className="footer__social"><YouTubeIcon /></a>
                </div>
                <ul className="footer__links">
                    <li className="footer__link">
                        <a href="/">lien footer</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">lien footer</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">lien footer</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">lien footer</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">lien footer</a>
                    </li>       <li className="footer__link">
                        <a href="/">lien footer</a>
                    </li>
                    <li className="footer__link">
                        <a href="/">lien footer</a>
                    </li>       <li className="footer__link">
                        <a href="/">lien footer</a>
                    </li>
                </ul>
                <div className="footer_copy">
                    <span>Netflix Clone - Netflix tous droits réservés et source TMDB</span><br />
                    <span ><a href="https://www.themoviedb.org/"><img className="footer__span" src={tmdbLogo} alt="logo tmdb" /></a></span>
                </div>
            </div>
        </footer>
    )
}

export default footer
