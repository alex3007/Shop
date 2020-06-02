import React from 'react';
import cls from './Header.module.sass';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={cls.header}>
            <Navbar className={cls.navbar} collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Brand href="">Automatic</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav mr-auto">
                        <NavLink className={cls.navLink} to={""}>Каталог</NavLink>
                        <NavLink className={cls.navLink} to={"delivery"}>Оплата и доставка</NavLink>
                        <NavLink className={cls.navLink} to={"actions"}>Акции</NavLink>
                        <NavLink className={cls.navLink} to={"news"}>Новости</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink className={cls.navLink} to={"about_us"}>О нас</NavLink>
                        <NavLink className={cls.navLink} to={"contacts"}>Контакты</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <hr className={cls.line}/>
            <div className={cls.info}>
                <p className={cls.headerTitle}>Фирменный интеренет-магазин</p>
                <p className={cls.headerTitle}>+375-33-333-22-11</p>
                <p className={cls.headerTitle}>+375-44-333-22-11</p>
                <p className={cls.headerTitle}>automatic@mail.ru</p>
            </div>
        </div>
    );
};

export default Header;
