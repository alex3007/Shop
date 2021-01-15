import React from 'react';
import cls from './Registration.module.css';
import {NavLink} from "react-router-dom";

export default class Auth extends React.Component {

    render() {

            return (
                <div>
                    <div className={cls.loginArea}>
                       <input/>
                       <input/>
                        <button className={cls.loginBtn} onClick={this.openModal} type="submit">Войти</button>
                    </div>
                </div>
            )
    }
}