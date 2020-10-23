import React from 'react';
import cls from '../ItemCard/ItemCard.module.css';
import {NavLink} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

export default class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.wrapperNote = React.createRef();
        this.state = {
            quantity: 1
        };
    }

    onBuyProduct = () => {
        let item = {
            name: this.props.name,
            photo: this.props.photo,
            cost: this.props.cost,
            quantity: this.state.quantity,
            path: this.props.path,
            id: uuidv4()
        };
        let cost = this.props.cost*this.state.quantity;

        this.props.addBuingProduct(item);

        const wrap = this.wrapperNote.current;
        wrap.classList.add(`${cls.wrapperNote}`);
        setTimeout(() => {
            wrap.classList.remove(`${cls.wrapperNote}`);
        }, 1500);
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

    render() {

        let productsParams = this.props.productsParams;
        return (
                <div className={cls.item}>
                    <NavLink className={cls.navLink} to={productsParams ? '/' + productsParams + this.props.path :
                        '/all_products' + this.props.path}>
                        <div className={cls.imageContainer}>
                            <img className={cls.imageExample} src={this.props.photo}/>
                        </div>
                        <p className={cls.itemName}>{this.props.name}</p>
                        <p className={cls.itemDescription}>{this.props.features}</p>
                        <p className={cls.itemCost}>{this.props.cost} BYN</p>
                    </NavLink>
                    <div className={cls.itemFooter}>
                        <div ref={this.wrapperNote} className={cls.wrapperHidden}>
                            <p>Товар в корзине!</p>
                        </div>
                        <input className={cls.productQuantity}
                               type="text"
                               onChange={this.onQuantityChange}
                               value={this.state.quantity}/>
                        <div className={cls.controlsArea}>
                            <button onClick={this.onQuantityPlus} className={cls.quantityControls}>+</button>
                            <button onClick={this.onQuantityMinus} className={cls.quantityControls}>-</button>
                        </div>
                        <a onClick={() => this.onBuyProduct()} className={cls.buyButton}>Купить</a>
                    </div>
                </div>
        )
    }
}
