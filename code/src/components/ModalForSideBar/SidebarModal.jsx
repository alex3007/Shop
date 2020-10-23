import React from 'react';
import cls from './SidebarModal.module.css'
import Modal from 'react-modal';

export default class SidebarModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
        };
    }
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
                            <p className={cls.login}>Login</p>
                            <button className={cls.loginBtn} onClick={this.openModal} type="submit">Войти</button>
                        </div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        className={cls.modal}
                        overlayClassName={cls.overlay}
                        contentLabel="Login Modal">
                        <div className={cls.modalWindow}>
                            <h2>Вход</h2>
                            <form onSubmit={this.login}>
                                <input type="text" placeholder="Логин"
                                       required value={this.state.userName}
                                       onChange={this.onLoginChange}
                                       className={cls.placeHolder}/><br/>
                                <input type="password" placeholder="Пароль" required
                                       className={cls.placeHolder}/><br/><br/>
                                <button className={cls.modalBtn} type="submit">Войти</button>
                                <button onClick={this.closeModal} className={cls.modalBtn}>Закрыть</button>
                            </form>
                        </div>
                    </Modal>
                </div>
            )
    }
}