import React from 'react';
import cls from './Footer.module.css';
import Contacts from "../Header/HeaderTop/Contacts/Contacts";
import WorkInfo from "../Header/HeaderTop/WorkInfo/WorkInfo";

const Footer = () => {
    return (
        <footer className={cls.footer}>
            <p>PNEUM | Интернет-магазин пневматики</p>
            <hr/>
            <div className={cls.info}>
                <Contacts/>
                <WorkInfo/>
            </div>
            <hr/>
            <p className="center">2020 | Все права защищены</p>
        </footer>
    );
};

export default Footer;

