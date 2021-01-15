import React from 'react';
import cls from './HeaderTop.module.sass';
import {NavLink} from "react-router-dom";
import brand from '../../../assets/images/brand.png'
import Contacts from "./Contacts/Contacts";
import WorkInfo from "./WorkInfo/WorkInfo";
import Social from "./Social/Social";
import AuthButtons from "./Auth/AuthButtons";

const HeaderTop = (props) => {
    return (
        <div className={cls.headerTop}>
            <div className={cls.brandArea}>
                <img src={brand}/>
                <NavLink className={cls.navBrand} to={"/"}>
                    <p>PNEUM</p>
                    <hr className={cls.line}/>
                    <p className={cls.title}>Интернет-магазин пневматики</p>
                </NavLink>
            </div>
            <div className={cls.contacts}>
                <Contacts/>
            </div>
            <div className={cls.workInfo}>
                <WorkInfo/>
            </div>
            <div className={cls.social}>
                <Social/>
            </div>
            <div className={cls.authArea}>
                <AuthButtons
                    {...props}/>
            </div>
        </div>
    );
};

export default HeaderTop;
