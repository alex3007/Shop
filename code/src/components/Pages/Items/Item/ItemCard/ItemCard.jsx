import React from 'react';
import cls from '../Item.module.css';
import Zoom from "react-reveal/Zoom";
import {NavLink} from "react-router-dom";


export default class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
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

    onBuyProduct = () => {
        let item = {
            name: this.props.name,
            photo: this.props.photo,
            cost: this.props.cost,
            quantity: this.state.quantity,
            path: this.props.path,
            id: this.props.buingProducts.length + 1
        }
        this.props.addBuingProduct(item)
    };


    render() {

        let productsParams = this.props.productsParams;
        return (
            <Zoom>
                <div className={cls.item}>
                    <NavLink className={cls.navLink} to={productsParams ? '/' + productsParams + this.props.path :
                        '/all_products' + this.props.path}>
                        <div className={cls.imageContainer}>
                            <img className={cls.imageExample} src={this.props.photo}/>
                        </div>
                        <p className={cls.itemName}>{this.props.name}</p>
                        <p className={cls.itemDescription}>{this.props.features}</p>
                        <p className={cls.itemName}>Цена:</p>
                        <p className={cls.itemCost}>{this.props.cost} BYN</p>
                    </NavLink>
                    <div className={cls.itemFooter}>
                        <input className={cls.productQuantity}
                               type="text"
                               onChange={this.onQuantityChange}
                               value={this.state.quantity}/>
                        <div className={cls.controlsArea}>
                            <button onClick={this.onQuantityPlus} className={cls.quantityControls}>+</button>
                            <button onClick={this.onQuantityMinus} className={cls.quantityControls}>-</button>
                        </div>
                        <a onClick={this.onBuyProduct} className={cls.buyButton}>Купить</a>
                    </div>
                </div>
            </Zoom>
        )
    }
}
