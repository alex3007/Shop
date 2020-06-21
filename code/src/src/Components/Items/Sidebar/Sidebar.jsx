import React from 'react';
import cls from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

const Sidebar = (props) => {

    const move = () => {
        return console.log('hello')
    };
    let sidebarElements = props.products
        .map(e => (<NavLink className={cls.link} to={e.path}
                            activeClassName={cls.active}>
            {e.name}
        </NavLink>));
    return (
        <div className={cls.sidebarContainer}>
            <div className={cls.sidebar}>
                {sidebarElements}
            </div>
            <div className={cls.onMoving}>
                <p onClick={move()} className={cls.onMovingLabel}>X</p>
            </div>
        </div>
    )
};
export default Sidebar;