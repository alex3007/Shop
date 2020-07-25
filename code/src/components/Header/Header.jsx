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
            <Navbar className={cls.navBar} collapseOnSelect expand="md"  variant="light">
                <Navbar.Toggle className={cls.toggler} aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav mr-auto navArea">
                        <NavLink activeClassName={cls.navActivLink} className={cls.navLink} exact to={"/"}>Каталог</NavLink>
                        <NavLink activeClassName={cls.navActivLink} className={cls.navLink} to={"/delivery"}>Оплата и доставка</NavLink>
                        <NavLink activeClassName={cls.navActivLink} className={cls.navLink} to={"/actions"}>Акции</NavLink>
                        <NavLink activeClassName={cls.navActivLink} className={cls.navLink} to={"/news"}>Новости</NavLink>
                    </Nav>
                    <Nav className="navArea">
                        <NavLink activeClassName={cls.navActivLink} className={cls.navLink} to={"/about_us"}>О нас</NavLink>
                        <NavLink className={cls.navLink} to={"/contacts"}>Контакты</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;
