import React from 'react';
import cls from './HeaderTop.module.sass';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <Container fluid>
            <Row>
                <Col className={cls.brandArea}>
                    <NavLink className={cls.navBrand} to={"/"}>Pneumatics</NavLink>
                </Col>
                <Col className={cls.infoArea} xs={9}>
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
    );
};

export default Header;
