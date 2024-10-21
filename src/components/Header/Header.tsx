import './Header.scss';
import React from 'react';
import logo from '@/assets/logo.svg';
import bookmark from '@/assets/bookmark-orange.svg';
import home from '@/assets/home.svg';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const location = useLocation();

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="museum" />
                    <p>Museum of <span>Art</span></p>
                </div>
                <div className="links">
                    {location.pathname === '/' ? (
                        <div>
                            <img src={bookmark} alt="bookmark" />
                            <Link to={'/favorites'} className="link">Your favorites</Link>
                        </div>
                    ) : (
                        <>
                            <div>
                                <img src={home} alt="home" />
                                <Link to={'/'} className="link">Home</Link>
                            </div>
                            <div>
                                <img src={bookmark} alt="bookmark" />
                                <Link to={'/favorites'} className="link">Your favorites</Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
