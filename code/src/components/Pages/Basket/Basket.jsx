import React from 'react';
import BasketItem from "./BasketItem";
import cls from './Basket.module.css';
import Fade from "react-reveal/Fade";
import OrderForm from "./OrderForm/OrderForm";

export default class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            summaryCost: 0
        };
        this.onChangeCost = this.onChangeCost.bind(this)
    }

    componentDidMount() {

        let sumCostArr = this.props.items.map(e => (e.cost * e.quantity));
        let sumCost = 0;
        for (let i = 0; i < sumCostArr.length; i++) {
            sumCost += sumCostArr[i];
        }
        this.setState({summaryCost: sumCost})
    }

    onChangeCost=(newNum)=>{
        let cost = this.state.summaryCost+newNum
        this.setState({summaryCost: cost})
    }


    render() {
        let itemsElements;
        let items = this.props.items;
        let note = <p className={cls.note}>В корзине нет товаров</p>
        if (items) {
            itemsElements = items.map(e => (
                <BasketItem path={e.path}
                            photo={e.photo}
                            name={e.name}
                            cost={e.cost}
                            quantity={e.quantity}
                            id={e.id}
                            addDeleteProduct={this.props.addDeleteProduct}
                            onChangeCost={this.onChangeCost}
                            key={e.id}/>

            ));
        } else {
            items = null
        }
        if (this.state.summaryCost>0){note=null}
        return (
            <div className={cls.itemContainer}>
                <Fade top><h1 className={cls.title}>Корзина товаров</h1></Fade>
                {itemsElements}
                {note}
                <div className={cls.addOrder}>
                    <h3>Общая стоимость товаров: {this.state.summaryCost} BYN</h3>
                    <OrderForm sumCost={this.state.summaryCost}
                               allProductsQuantity={this.props.items.length}/>
                </div>
            </div>

        )
    }
}