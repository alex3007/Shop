import React from 'react';
import cls from './ActionCards.module.css';
import {NavLink} from "react-router-dom";
import Bounce from 'react-reveal/Bounce';
import actionOne from '../../../../assets/images/act1.jpg';
import actionTwo from '../../../../assets/images/act2.jpg';


const ActionCards = (props) => {

    return (

        <div className={cls.actions}>
            <NavLink className={cls.actionNav} to={"/actions"}>
                    <img src={actionOne}/>
                    <p className={cls.actionTitle}>Интересные предложения</p>
            </NavLink>
            <NavLink className={cls.actionNav} to={"/actions"}>
                    <img src={actionTwo}/>
                    <p className={cls.actionTitle}>Хорошие скидки</p>
            </NavLink>
        </div>
    )
};

export default ActionCards;
