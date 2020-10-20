import React from 'react';
import cls from './Basket.module.css';
import Zoom from "react-reveal/Zoom";


export default class BasketItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.quantity
        };
    }

    onQuantityChange = (text) => {

        if (isNaN(text.target.value)) {
            text.target.value = 1
            this.setState({quantity: 1})
        } else if (text.target.value > 999) {
            this.setState({quantity: 999})
        } else if (text.target.value < 1) {
            this.setState({quantity: 1})
        } else {
            this.setState({quantity: text.target.value})
        }
    };
    onQuantityPlus = () => {
        if (this.state.quantity - 1 + 2 > 999) {
            this.setState({quantity: 999})
        } else {
            this.setState({quantity: this.state.quantity - 1 + 2})
        }

    };
    onQuantityMinus = () => {
        if (this.state.quantity - 1 < 1) {
            this.setState({quantity: 1})
        } else {
            this.setState({quantity: this.state.quantity - 1})
        }
    };

    onDeleteProduct = () => {
        this.props.addDeleteProduct(this.props.id)
    };

    render() {

        return (
            <Zoom>
                <div className={cls.item}>
                    <a onClick={this.onDeleteProduct} className={cls.buyButton}>Удалить</a>
                    <h3 className={cls.itemName}>{this.props.name}</h3>
                    <div className={cls.itemBody}>
                        <div className={cls.imageContainer}>
                            <img className={cls.imageExample} src={this.props.photo}/>
                        </div>
                        <div>
                            <p className={cls.itemCost}>{this.props.cost} BYN</p>
                        </div>
                        <div className={cls.itemQuantity}>
                            <h3>Количество:</h3>
                            <div className={cls.itemFooter}>
                                <input className={cls.productQuantity}
                                       type="text"
                                       onChange={this.onQuantityChange}
                                       value={this.state.quantity}/>
                                <div className={cls.controlsArea}>
                                    <button onClick={this.onQuantityPlus} className={cls.quantityControls}>+
                                    </button>
                                    <button onClick={this.onQuantityMinus} className={cls.quantityControls}>-
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Zoom>
        )
    }
}
