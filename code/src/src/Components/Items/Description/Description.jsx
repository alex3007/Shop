import React from 'react';
import cls from './Description.module.css';
import {NavLink} from "react-router-dom";
import Preloader from "../../../common/Preloader/Preloader";
import Fade from 'react-reveal/Fade';
import photo from './../../../Assets/images/photo.jpg'
import ReactModal from 'react-modal';

export default class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            modalIsOpen: false,
            productName: this.props.itemDescription
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
        let itemDescription = this.state.productName;
        let modalContainer;
        if (itemDescription !== 'loading') {
            itemDescription =
                <Fade>
                    <div className={cls.container}>
                        <h4><b>Название товара: </b>{itemDescription.name}</h4>
                        <img src={itemDescription.photo}/>
                        <button className={cls.buyButton} onClick={this.openModal}>Заказать</button>
                        <p><b>Особенности: </b>{itemDescription.description}</p>
                    </div>
                </Fade>
        }
        else {
            itemDescription = <Preloader/>
        }

        return (

            <div>
                {itemDescription}
                <div>
                    <ReactModal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        className={cls.modal}
                        overlayClassName={cls.overlay}>
                        <div className={cls.modalWindow}>
                            <h3>Заказ товара</h3>
                            <form>
                                <input type="text" placeholder="Название товара"
                                       value={this.state.productName.name}/><br/>
                                <input  type="text" placeholder="Введите имя"
                                       required
                                       onChange={this.onNameChange}/><br/>
                                <input type="text" placeholder="Введите номер телефона"
                                       required
                                       onChange={this.onPhoneChange}/><br/>
                                <br/>
                                <button onClick={this.closeModal}>Подтвердить заказ</button>
                            </form>
                        </div>
                    </ReactModal>
                </div>

            </div>
        )
    }
}

