import React from 'react';
import cls from './Auth.module.css'
import ReactModal from 'react-modal';

export default class Auth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userEmail: this.props.userEmail
        };
    }
    sendData = () =>{
        let u = this.state.userEmail
        u !== null && u.length > 5 && u.includes("@") &&
        u.indexOf(".") !== -1 && u.indexOf(" ") === -1 &&
        this.props.login(u)
    }

    closeModal = () => {
        this.props.toggleIsOpen(false);
    };

    render() {
        return (
            <ReactModal
                isOpen={this.props.isOpen}
                onRequestClose={this.closeModal}
                className={cls.modal}
                overlayClassName={cls.overlay}
                contentLabel="Login Modal">
                <div className={cls.modalWindow}>
                    <i onClick={this.closeModal} className='fa fa-2x fa-close'/>
                    <h2>Пожалуйста, введите адрес электронной почты</h2>
                    <form onSubmit={this.sendData}>
                        <input type="email" placeholder="user@gmail.com" required
                               minLength={5}
                               value={this.props.userEmail}
                               onChange={(e) => this.setState({userEmail: e.target.value})}
                               className={cls.placeHolder}/><br/><br/>
                        <button onClick={this.sendData}
                                className={cls.modalBtn} >Готово
                        </button>
                    </form>
                </div>
            </ReactModal>
        )
    }
}