import React from 'react';
import cls from './Header.module.sass';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {NavLink} from "react-router-dom";
import HeaderTop from "./HeaderTop/HeaderTop";


export default class Header extends React.Component {

    render() {
        return (
            <header>
                <HeaderTop
                    {...this.props}
                />
                <div className={cls.navBarArea}>
                    <Navbar className={cls.navBar}  variant="dark">
                        <NavLink activeClassName={cls.navActivLink}
                                 className={`${cls.navLink} ${cls.linkHidden}`}
                                 to={"/delivery"}>Оплата и доставка</NavLink>
                        <NavLink activeClassName={cls.navActivLink}
                                 className={`${cls.navLink} ${cls.linkHidden}`}
                                 to={"/about_us"}>О нас</NavLink>
                        <NavLink activeClassName={cls.navActivLink}
                                 className={`${cls.navLink} ${cls.linkHidden}`}
                                 to={"/contacts"}>Контакты</NavLink>
                    </Navbar>
                    <Nav className={cls.responsiveNavLinkArea}>
                        <NavLink className={cls.contactNavLink} activeClassName={cls.contactNavActiveLink}
                                 to={"/delivery"}><i className='fa fa-truck'/></NavLink>
                        <NavLink className={cls.contactNavLink} activeClassName={cls.contactNavActiveLink}
                                 to={"/about_us"}><i className='fa fa-address-book'/></NavLink>
                        <NavLink className={cls.contactNavLink} activeClassName={cls.contactNavActiveLink}
                                 to={"/contacts"}><i className='fa fa-phone'/></NavLink>
                        <NavLink className={cls.basketNavLink} activeClassName={cls.basketNavActiveLink} to={"/basket"}>
                            <i className='fa fa-shopping-cart'/>
                            <p>{this.props.buingItems.length}</p>
                        </NavLink>
                    </Nav>
                </div>
            </header>
        );
    }
}
