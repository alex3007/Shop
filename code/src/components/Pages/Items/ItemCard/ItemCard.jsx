import React from 'react';
import cls from './ItemCard.module.css';
import {NavLink} from "react-router-dom";
import {v4 as uuidv4} from 'uuid';

export default class ItemCard extends React.Component {
    constructor(props) {
        super(props);
        this.wrapperNote = React.createRef();
        this.state = {
            quantity: 1
        };
    }

    onBuyProduct = () => {
        if (this.props.isAuth) {
            let item = {
                name: this.props.name,
                photo: this.props.photo,
                cost: this.props.cost,
                quantity: this.state.quantity,
                path: this.props.path,
                id: uuidv4()
            };
            let cost = this.props.cost * this.state.quantity;

            this.props.addBuingItem(item);

            const wrap = this.wrapperNote.current;
            wrap.classList.add(`${cls.wrapperNote}`);
        } else {
            this.props.toggleIsOpen(true)
        }
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
                    <div className={cls.itemInfoArea}>
                        <div className={cls.itemInfo}>
                            <p className={cls.itemName}>{this.props.name}</p>
                            <p className={cls.itemDescription}>{this.props.features}</p>
                        </div>
                        <p className={cls.itemCost}>{this.props.cost} BYN</p>
                    </div>
                </NavLink>
                <div className={cls.itemFooter}>
                    <input className={cls.productQuantity}
                           type="text"
                           onChange={this.onQuantityChange}
                           value={this.state.quantity}/>
                    <div className={cls.controlsArea}>
                        <button onClick={this.onQuantityPlus} className={cls.quantityControls}><p>+</p></button>
                        <button onClick={this.onQuantityMinus} className={cls.quantityControls}><p>-</p></button>
                    </div>
                    <div className={cls.buyButton}>
                        <p onClick={() => this.onBuyProduct()}>Купить</p>
                        <NavLink className={cls.wrapperHidden} to='basket'
                                 ref={this.wrapperNote}>Товар в корзине</NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
