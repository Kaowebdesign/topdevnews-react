import React from 'react';

const Footer = ({siteTitle}) => (
    <footer className="footer">
        <div className="container-fluid">
            <div className="row justify-content-between">
                <div className="col-2">
                    <p className="footer__text footer__text_sm mb-1">&copy; {siteTitle}</p>
                    <p className="footer__text footer__text_sm mb-0">All rights reserved {new Date().getFullYear()}</p>
                </div>
                <div className="col-2">
                    <p className="footer__text mb-0">{siteTitle} - Lorem, ipsum dolor sit amet consectetur adipisicing elit...<a href="/" className="footer__about">Подробнее</a></p>
                </div>
                <div className="col-2 footer__mail-links">
                    <a href="mailto:topdevnews@gmail.com" className="footer__mails-link footer__text">example@gmail.com</a>
                    <a href="/" className="footer__mails-link footer__text">@example</a>
                </div>
                <div className="col-2">
                    <ul className="footer__list">
                        <li className="footer__item pr-3">
                            <a href="/" className="footer__link footer__text">Instagram</a>
                        </li>
                        <li className="footer__item pr-3">
                            <a href="/" className="footer__link footer__text">Telegram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;