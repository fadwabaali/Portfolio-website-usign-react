import React, { useState } from 'react';
import {ReactComponent as Logo} from '../images/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const openMenuHandler = () => setOpenMenu(!openMenu);
  return (
    <header className="header__sec container">
        <nav>
            <div className="logo__sec">
                <Logo />
            </div>
            <div className={openMenu? 'nav__container nav__open' : 'nav__container'}>
            <ul className="nav__list">
                <li className="nav__item">
                    <a href='#home' className="nav__link">Home</a>
                </li>
                <li className="nav__item">
                    <a href='#about' className="nav__link">What is GPT?</a>
                </li>
                <li className="nav__item">
                    <a href='#service' className="nav__link">Open AI</a>
                </li>
                <li className="nav__item">
                    <a href='#CaseStudies' className="nav__link">Case Studies</a>
                </li>
                <li className="nav__item">
                    <a href='#blog' className="nav__link">Library</a>
                </li>
            </ul>
            <div className="button">
                <a href='/' className="btn btn__secondary">Sign In</a>
                <a href='/' className="btn">Sign Up</a>
            </div>
            </div>
            <div className='menu__toggler' onClick={openMenuHandler}>
                {openMenu ? <FaTimes />: <FaBars />}
            </div>
        </nav>
    </header>
  )
}

export default Navbar