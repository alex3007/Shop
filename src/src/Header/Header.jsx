import React from 'react';
import cls from './Header.module.css';
import title from "./../Assets/images/message.png";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={cls.header}>
            <div className={cls.header_block}><img className={cls.header_logo} src={title}/>
                <p className={cls.header_title}>Сheerful conversation!</p>
                <div className={cls.loginBlock}>
                    {props.isAuth ? props.login
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    );
};
export default Header;