import React from 'react';
import {ReactComponent as Logo} from '../images/logo.svg';
import FooterList from './FooterList';


const Footer = () => {
  return (
    <footer className="footer__sec section">
        <div className="footer__container container">
            <div className="logo__sec">
                <div className="logo">
                    <Logo />
                </div>
                <p className="footer__descp">
                    Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
                </p>
            </div>

            <div className="footer__list">
            <ul>
                <h4>Links</h4>
                <FooterList item='Overons' />
                <FooterList item='Social Media' />
                <FooterList item='Counters' />
                <FooterList item='Contact' />
            </ul>

            <ul>
                <h4>Company</h4>
                <FooterList item='Terms & Conditions' />
                <FooterList item='Privacy Policy' />
                <FooterList item='Contact' />
            </ul>

            <ul>
                <h4>Get in touch</h4>
                <FooterList item='Crechterwoord K12 182 DK Alknjkcb' />
                <FooterList item='085-132567' />
                <FooterList item='info@payme.net' />
            </ul>
            </div>
        </div>
        <div className="copyright__sec container">
            <p className='footer__descp'>© 2022 GPT-3. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer