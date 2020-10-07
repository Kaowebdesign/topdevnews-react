import React from 'react';
import {Link} from "react-router-dom";
import Subscribe from '../components/Subscribe';
 
const Footer = ({siteTitle}) => (
    <footer className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center footer_bottom-line pb-4">
                    <h2 className="footer__caption">{siteTitle}</h2>
                </div>
                <div className="col-12 d-flex justify-content-between align-items-center footer_bottom-line py-4">
                     <ul className="footer__list m-0">
                        <li className="footer__item pr-3">
                            <Link to="/" className="footer__link footer__text">Home</Link>
                        </li>
                        <li className="footer__item pr-3">
                            <Link to="/about" className="footer__link footer__text">About</Link>
                        </li>
                        <li className="footer__item pr-3">
                            <Link to="/upgrade" className="footer__link footer__text">Upgrade</Link>
                        </li>
                    </ul>
                    <Subscribe />
                    <ul className="footer__list m-0">
                        <li className="footer__item pr-3">
                            <a href="/" className="footer__link footer__text">Instagram</a>
                        </li>
                        <li className="footer__item pr-3">
                            <a href="/" className="footer__link footer__text">Telegram</a>
                        </li>
                        <li className="footer__item pr-3">
                            <a href="mailto:topdevnews@gmail.com" className="footer__link footer__text">Gmail</a>
                        </li>
                    </ul>
                </div>
                <div className="col-12 pt-4">
                    <p className="footer__text footer__text_sm text-center mb-0">Copyright &copy; {new Date().getFullYear()} {siteTitle}. All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;