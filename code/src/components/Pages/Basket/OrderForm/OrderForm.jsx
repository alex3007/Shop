import React from 'react';
import cls from './OrderForm.module.css';
import ReactModal from 'react-modal';
import Fade from 'react-reveal/Fade';

export default class OrderForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            modalIsOpen: false,
            productName: this.props.productName
        };
    }

    onNameChange = (name) => {
        this.setState({userName: name.target.value});
    };
    onPhoneChange = (phone) => {
        this.setState({userName: phone.target.value});
    };
    openModal = () => {
        this.setState({modalIsOpen: true});
    };
    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    render() {
        return (
            <div>
                <button className={cls.confirmButton} onClick={this.openModal}>Заказать</button>

                <ReactModal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    className={cls.modal}
                    overlayClassName={cls.overlay}>
                        <div className={cls.form}>
                            <h3>Форма заказа</h3>
                            <hr/>
                            <div className={cls.notesArea}>
                                <p>Количество наименований: {this.props.allProductsQuantity}</p>

                                <p>Общая стоимость: {this.props.sumCost} BYN</p>
                            </div>
                            <hr/>
                            <p><b>Личные данные</b></p>
                            <form>
                                <input type="text" placeholder="Введите имя"
                                       required
                                       onChange={this.onNameChange}/><br/>
                                <input type="text" placeholder="Введите номер телефона"
                                       required
                                       onChange={this.onPhoneChange}/><br/>
                                <br/>
                                <button className={cls.confirmButton} onClick={this.closeModal}>Подтвердить заказ
                                </button>
                            </form>
                        </div>
                </ReactModal>
            </div>
        )
    }
}

