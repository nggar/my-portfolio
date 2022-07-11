import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [activeNav, setActiveNav] = useState( false );
    const navBtnHandler = () => {
        setActiveNav( !activeNav );
    }

    return (
        <div className="main-container">
            <div className="container">
                <div className="nav section-margin" id='nav'>

                    <Link to='/' className="nav__logo">
                        <h1 className='logo-text'>Enggar</h1>
                    </Link>
                    <div className={`nav__links ${activeNav ? 'nav__links--mobile' : ''}`}>
                        <Link onClick={navBtnHandler} to='/'
                            className={`link-nav ${activeNav ? 'link-nav--white' : ''}`} >Home</Link>
                        <Link onClick={navBtnHandler} to='/aboutme'
                            className={`link-nav ${activeNav ? 'link-nav--white' : ''}`} >About</Link>
                        <Link onClick={navBtnHandler} to='/contact'
                            className={`link-nav ${activeNav ? 'link-nav--white' : ''}`} >Contact</Link>
                    </div>
                    <div onClick={navBtnHandler} className={`nav-outside ${activeNav ? 'nav-outside--active' : ''}`}></div>

                    <div onClick={navBtnHandler}
                        className={`nav__btn ${activeNav ? 'nav__btn--active' : ''}`}>
                        <div className="nav__btn__icon nav__btn__icon--1"></div>
                        <div className="nav__btn__icon nav__btn__icon--2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;