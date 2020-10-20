import React from 'react';
import cls from './Header.module.sass';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from "react-router-dom";
import HeaderTop from "./HeaderTop/HeaderTop";

const Header = (props) => {
    return (
        <header>
            <HeaderTop/>
            <div className={cls.navBarArea}>
                <Navbar className={cls.navBar} collapseOnSelect expand="md" variant="dark">
                    <Navbar.Toggle className={cls.toggler} aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="nav mr-auto navArea">
                            <NavLink activeClassName={cls.navActivLink} className={cls.navLink} to={"/delivery"}>Оплата
                                и
                                доставка</NavLink>
                            <NavLink activeClassName={cls.navActivLink} className={cls.navLink} to={"/about_us"}>О
                                нас</NavLink>
                            <NavLink activeClassName={cls.navActivLink} className={cls.navLink}
                                     to={"/contacts"}>Контакты</NavLink>
                        </Nav>
                        <Nav className="navArea">
                            <NavLink className={cls.navLink} activeClassName={cls.navActivLink} to={"/basket"}>
                                <i className='fa fa-shopping-cart'/>
                                0.00 руб
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    );
};

export default Header;
