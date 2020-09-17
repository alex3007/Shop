import React from 'react';
import cls from './ActionCards.module.css';
import {NavLink} from "react-router-dom";
import Bounce from 'react-reveal/Bounce';
import actionOne from '../../../../../assets/images/act1.jpg';
import actionTwo from '../../../../../assets/images/act2.jpg';

const ActionCards = (props) => {

    return (

            <div className={cls.actions}>
                <NavLink className={cls.actionNav} to={"/actions"}><Bounce delay={100}><img
                    src={actionOne}/></Bounce></NavLink>
                <NavLink className={cls.actionNav} to={"/actions"}><Bounce delay={200}><img
                    src={actionTwo}/></Bounce></NavLink>
            </div>
    )
};

export default ActionCards;
