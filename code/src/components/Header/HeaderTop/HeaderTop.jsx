import React from 'react';
import cls from './HeaderTop.module.sass';
import {NavLink} from "react-router-dom";
import Auth from "../Auth/Auth";

const Header = (props) => {
    return (
        <div className={cls.headerTop}>
            <div className={cls.brandArea}>
                <NavLink className={cls.navBrand} to={"/"}>Pneumatics</NavLink>
            </div>
            <div className={cls.infoArea}>
                <div className={cls.infoBlock}>
                    <p className={cls.headerTitle}>Фирменный интеренет-магазин</p>
                </div>
                <hr className={cls.line}/>
                <div className={cls.headerContact}>
                    <p className={cls.headerTitle}>+375-33-333-22-11</p>
                    <p className={cls.headerTitle}>+375-44-333-22-11</p>
                    <p className={cls.headerTitle}>pneumatics@info.by</p>
                </div>
            </div>
            <div className={cls.authArea}>
                <div className={cls.authBlock}>
                    <Auth/>
                </div>
            </div>
        </div>
    );
};

export default Header;
