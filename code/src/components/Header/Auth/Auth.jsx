import React from 'react';
import cls from './Auth.module.css'
import Modal from 'react-modal';
import {NavLink} from "react-router-dom";

export default class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            isAuth: false,
            modalIsOpen: false,
        };
    }

    onLoginChange = (name) => {
        this.setState({userName: name.target.value});
    };
    login = () => {
        this.setState({isAuth: true});
    };
    logOut = () => {
        this.setState({isAuth: false, modalIsOpen: false});
    };
    openModal = () => {
        this.setState({modalIsOpen: true});
    };
    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    render() {
        if (this.state.isAuth) {
            return (
                <div className={cls.loginArea}>
                    <p className={cls.login}>{this.state.userName}</p>
                    <button className={cls.loginBtn} onClick={this.logOut}>Выйти</button>
                </div>
            )
        } else
            return (
                <div>
                    <div className={cls.loginArea}>
                        <NavLink className={cls.loginNav} to={"/"}>
                            <p className={cls.login}>Регистрация</p>
                        </NavLink>
                        <button className={cls.loginBtn} onClick={this.openModal} type="submit">Войти</button>
                    </div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        className={cls.modal}
                        overlayClassName={cls.overlay}
                        contentLabel="Login Modal">
                        <div className={cls.modalWindow}>
                            <i onClick={this.closeModal} className='fa fa-2x fa-close'/>
                            <h2>Вход</h2>
                            <form onSubmit={this.login}>
                                <input type="text" placeholder="Логин"
                                       required value={this.state.userName}
                                       onChange={this.onLoginChange}
                                       className={cls.placeHolder}/><br/>
                                <input type="password" placeholder="Пароль" required
                                       className={cls.placeHolder}/><br/><br/>
                                <button className={cls.modalBtn} type="submit">Войти</button>
                            </form>
                        </div>
                    </Modal>
                </div>
            )
    }
}