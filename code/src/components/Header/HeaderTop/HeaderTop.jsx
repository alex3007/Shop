import React from 'react';
import cls from './HeaderTop.module.sass';
import {NavLink} from "react-router-dom";
import Auth from "../Auth/Auth";
import brand from '../../../assets/images/brand.png'

const Header = (props) => {
    return (
        <div className={cls.headerTop}>
            <div className={cls.brandArea}>
                <img src={brand}/>
                <NavLink className={cls.navBrand} to={"/"}>PNEUM</NavLink>
            </div>
            <div className={cls.infoArea}>
                <div className={cls.infoBlock}>
                    <p className={cls.headerTitle}>Фирменный интеренет-магазин</p>
                </div>
                <div>
                    <hr className={cls.line}/>
                </div>
                <div className={cls.headerContact}>
                    <p >+375-33-333-22-11</p>
                    <p >+375-44-333-22-11</p>
                    <p className={cls.headerEmail}>pneum@info.by</p>
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
