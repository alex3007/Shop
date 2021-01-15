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
                <button className={cls.orderButton} onClick={this.openModal}>Заказать</button>

                <ReactModal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    className={cls.modal}
                    overlayClassName={cls.overlay}>
                        <div className={cls.form}>
                            <i onClick={this.closeModal} className='fa fa-2x fa-close'/>
                            <h3>Форма заказа</h3>
                            <form>
                                <input type="text" placeholder="Введите email"
                                       required
                                       value={this.props.userEmail}
                                       onChange={this.onNameChange}/><br/>
                                <input type="text" placeholder="Введите номер телефона"
                                       required
                                       onChange={this.onPhoneChange}/>
                            </form><br/>
                            <hr/>
                            <div className={cls.notesArea}>
                                <p>Количество наименований: {this.props.items.length}</p>

                                <p>Общая стоимость: {this.props.summaryCost} BYN</p>
                            </div>
                            <hr/>

                            <button className={cls.confirmButton} onClick={this.closeModal}>Подтвердить заказ
                            </button>
                        </div>
                </ReactModal>
            </div>
        )
    }
}

