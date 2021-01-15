import React from 'react';
import cls from './Basket.module.css';

export default class BasketItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.quantity
        };
        this.wrapperNote = React.createRef();
    }

    onQuantityChange = (text) => {
        let lastNum = this.state.quantity;
        let newNum = text.target.value;
        this.wrapperNote.current.classList.add(`${cls.wrapperNote}`);
        if (isNaN(newNum)) {
            newNum = lastNum
        } else if (newNum > 999) {
            newNum = 999
        } else if (newNum < 1) {
            newNum = 1
        }
        this.setState({quantity: newNum})
    }

    onQuantityPlus = () => {
        this.wrapperNote.current.classList.add(`${cls.wrapperNote}`);
        if (this.state.quantity - 1 + 2 > 999) {
            this.setState({quantity: 999})
        } else {
            this.setState({quantity: this.state.quantity - 1 + 2})
        }
    }

    onQuantityMinus = () => {
        this.wrapperNote.current.classList.add(`${cls.wrapperNote}`);
        if (this.state.quantity - 1 < 1) {
            this.setState({quantity: 1})
        } else {
            this.setState({quantity: this.state.quantity - 1})
        }
    }

    onQuantitySave = () => {
        this.props.updateItem(this.props.id, this.state.quantity);
        this.wrapperNote.current.classList.remove(`${cls.wrapperNote}`);
    }

    onDeleteProduct = () => {
        this.props.deleteItem(this.props.id)
    }

    render() {

        return (
                <div className={cls.item}>
                    <a onClick={this.onDeleteProduct} className={cls.buyButton}>
                        <i className="fa fa-trash"/>
                    </a>
                    <h3 className={cls.itemName}>{this.props.name}</h3>
                    <div className={cls.itemBody}>
                        <div className={cls.imageContainer}>
                            <img className={cls.imageExample} src={this.props.photo}/>
                        </div>
                        <div>
                            <p className={cls.itemCost}>{this.props.cost} BYN</p>
                        </div>
                        <div className={cls.itemQuantityArea}>
                            <h3>Количество:</h3>
                            <div className={cls.itemQuantity}>
                                <input className={cls.inputQuantity}
                                       type="text"
                                       onChange={this.onQuantityChange}
                                       value={this.state.quantity}
                                />
                                <div className={cls.controlsArea}>
                                    <button onClick={this.onQuantityPlus} className={cls.quantityControls}>
                                        <p>+</p>
                                    </button>
                                    <button onClick={this.onQuantityMinus} className={cls.quantityControls}>
                                        <p>-</p>
                                    </button>
                                </div>

                            </div>
                            <div className={cls.wrapperUnvisible} ref={this.wrapperNote}>
                                <p onClick={this.onQuantitySave} className={cls.quantitySaveButton}>
                                   Обновить стоимость
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}
