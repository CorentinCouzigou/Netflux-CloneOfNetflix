import React from 'react';
import "./footer.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
                    Netflix Clone - tous droits réservés
                </div>
            </div>
        </footer>
    )
}

export default footer
