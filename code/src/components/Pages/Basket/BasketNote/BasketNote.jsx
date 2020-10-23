import React from 'react';
import cls from './BasketNote.module.css'
import Modal from 'react-modal';

export default class BasketNote extends React.Component {
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
        return (
                <div>
                        <div className={cls.loginArea}>
                            <button className={cls.loginBtn} onClick={this.openModal} type="submit">Войти</button>
                        </div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        className={cls.modal}
                        overlayClassName={cls.overlay}
                        contentLabel="Login Modal">


                        <div className={cls.itemQuantity}>
                            <h3>Количество:</h3>
                            <div className={cls.itemFooter}>
                                <input className={cls.productQuantity}
                                       type="text"
                                       onChange={this.onQuantityChange}
                                       value={this.state.quantity}
                                />
                                <div className={cls.controlsArea}>
                                    <button onClick={this.onQuantityPlus} className={cls.quantityControls}>+
                                    </button>
                                    <button onClick={this.onQuantityMinus} className={cls.quantityControls}>-
                                    </button>
                                </div>
                            </div>
                        </div>



                    </Modal>
                </div>
            )
    }
}