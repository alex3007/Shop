import React from 'react';
import cls from './Header.module.sass';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header>
            <Container fluid>
                <Row>
                    <Col className={cls.brandArea} >
                        <NavLink className={cls.navBrand} to={"/"} >Pneumatics</NavLink>
                    </Col>
                    <Col className={cls.infoArea}  xs={9}>
                        <div className={cls.infoBlock}>
                            <p className={cls.headerTitle}>Фирменный интеренет-магазин</p>
                        </div>
                        <hr className={cls.line}/>
                        <div className={cls.infoBlock}>
                            <p className={cls.headerTitle}>+375-33-333-22-11</p>
                            <p className={cls.headerTitle}>+375-44-333-22-11</p>
                            <p className={cls.headerTitle}>pneumatics@info.by</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Navbar className={cls.navBar} collapseOnSelect expand="md"  variant="light">
                <Navbar.Toggle className={cls.toggler} aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="nav mr-auto navArea">
                        <NavLink className={cls.navLink}to={"/"}>Каталог</NavLink>
                        <NavLink className={cls.navLink} to={"/delivery"}>Оплата и доставка</NavLink>
                        <NavLink className={cls.navLink} to={"/actions"}>Акции</NavLink>
                        <NavLink className={cls.navLink} to={"/news"}>Новости</NavLink>
                    </Nav>
                    <Nav className="navArea">
                        <NavLink className={cls.navLink} to={"/about_us"}>О нас</NavLink>
                        <NavLink className={cls.navLink} to={"/contacts"}>Контакты</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;
