import React from 'react';
import BasketItem from "./BasketItem";
import cls from './Basket.module.css';
import Fade from "react-reveal/Fade";
import OrderForm from "../Items/Description/OrderForm/OrderForm";

const Basket = (props) => {

    let items = props.items;
    let itemsElements;

    if (items) {
        itemsElements = items.map(e => (
            <BasketItem path={e.path}
                        photo={e.photo}
                        name={e.name}
                        cost={e.cost}
                        quantity={e.quantity}
                        id={e.id}
                        addDeleteProduct={props.addDeleteProduct}
            />
        ))
    } else { items = null}

    return (
        <div className={cls.itemContainer}>
            <Fade top><h1 className={cls.title}>Корзина товаров</h1></Fade>
            {itemsElements}
            <div className={cls.addOrder}>
                <OrderForm productName='Несколько товаров'/>
            </div>
        </div>

    )
}

export default Basket;