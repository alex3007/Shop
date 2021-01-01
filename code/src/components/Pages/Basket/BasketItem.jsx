import React from 'react';
import cls from './Basket.module.css';
import Zoom from "react-reveal/Zoom";


export default class BasketItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.quantity
        };
        this.onQuantityChange = this.onQuantityChange.bind(this);
        this.onQuantityPlus = this.onQuantityPlus.bind(this);
        this.onQuantityMinus = this.onQuantityMinus.bind(this);
        this.onDeleteProduct = this.onDeleteProduct.bind(this)
    }

    onQuantityChange = (text) => {

        let lastNum = this.state.quantity;
        let newNum = text.target.value;

        if (isNaN(newNum)) {
            newNum = lastNum
        } else if (newNum > 999) {
            newNum = 999
        } else if (newNum < 1) {
            newNum = 1
        }
        this.props.onChangeCost((newNum - lastNum) * this.props.cost);
        this.setState({quantity: newNum})
    }

    onQuantityPlus = () => {
        if (this.state.quantity - 1 + 2 > 999) {
            this.setState({quantity: 999})
        } else {
            this.setState({quantity: this.state.quantity - 1 + 2})
            this.props.onChangeCost(this.props.cost * 1)
        }
    }

    onQuantityMinus = () => {
        if (this.state.quantity - 1 < 1) {
            this.setState({quantity: 1})
        } else {
            this.setState({quantity: this.state.quantity - 1})
            this.props.onChangeCost(0 - this.props.cost * 1)
        }
    }

    onDeleteProduct = () => {
        let lastNum = this.props.quantity
        let newNum = this.state.quantity;
        this.props.onChangeCost((0 - Math.abs(lastNum - newNum) - lastNum) * this.props.cost);
        this.props.addDeleteProduct(this.props.id)

    }

    render() {

        return (
            <Zoom>
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
                            <div className={cls.itemFooter}>
                                <input className={cls.productQuantity}
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
                        </div>
                    </div>
                </div>
            </Zoom>
        )
    }
}
