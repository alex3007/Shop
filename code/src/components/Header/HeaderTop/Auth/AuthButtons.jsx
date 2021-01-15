import React from 'react';
import cls from './Auth.module.css'
import user from '../../../../assets/images/user.png'
import Auth from "./Auth";


export default class AuthButtons extends React.Component {

    render() {
        if (this.props.isAuth) {
            return (
                <div className={cls.loginArea}>
                    <p className={cls.login}>{this.props.userEmail}</p>
                    <button className={cls.loginBtn}
                            onClick={()=> {this.props.logout()
                          this.props.toggleIsOpen(false)}}>Выйти</button>
                </div>
            )
        } else
            return (
                <div>
                    <div className={cls.loginArea}>
                        <img src={user} className={cls.userImg}/>
                        <button className={cls.loginBtn}
                                onClick={() => this.props.toggleIsOpen(true)}>Войти
                        </button>
                    </div>
                    <Auth {...this.props}/>
                </div>
            )
    }
}