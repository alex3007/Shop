import React from 'react';
import cls from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={cls.navbar}>
            <div className={cls.item}>
                <i className="fa fa-address-book"/>
                <NavLink to="/profile" className={cls.link} activeClassName={cls.active}>Profile</NavLink>
            </div>
            <div className={`${cls.item} ${cls.activel}`}>
                <i className="fa fa-comments"/>
                <NavLink to="/dialogs" className={cls.link} activeClassName={cls.active}>Messages</NavLink>
            </div>
            <div className={`${cls.item} ${cls.activel}`}>
                <i className="fa fa-user"/>
                <NavLink to="/users" className={cls.link} activeClassName={cls.active}>Users</NavLink>
            </div>

            <div className={cls.item}>
                <i className="fa fa-newspaper-o"/>
                <NavLink className={cls.link} activeclassName={cls.active}>News</NavLink>
            </div>
            <div className={cls.item}>
                <i className="fa fa-headphones"/>
                <NavLink className={cls.link} activeclassName={cls.active}>Music</NavLink>
            </div>
            <div className={cls.item}>
                <i className="fa fa-play"/>
                <NavLink className={cls.link} activeclassName={cls.active}> Video</NavLink>
            </div>
            <div className={cls.item}>
                <i className="fa fa-user-circle "/>
                <NavLink className={cls.link} activeclassName={cls.active}>Friends</NavLink>
            </div>

        </div>
    )
}

export default Navbar;