import React from 'react';
import BasketItem from "./BasketItem";
import cls from './Basket.module.css';
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import OrderForm from "./OrderForm/OrderForm";

export default class Basket extends React.Component {

    render() {
        let itemsElements;
        let items = this.props.items;
        let summaryCostArr = this.props.items.map(e => (e.cost * e.quantity));
        let summaryCost = 0;
        for (let i = 0; i < summaryCostArr.length; i++) {
            summaryCost += summaryCostArr[i];
        }
        let note = <p className={cls.note}>В корзине нет товаров</p>
        if (items.length !== 0) {
            itemsElements = items.map(e => (
                <BasketItem path={e.path}
                            photo={e.photo}
                            name={e.name}
                            cost={e.cost}
                            quantity={e.quantity}
                            id={e.id}
                            key={e.id}
                            {...this.props}

                />
            ));
        } else {
            items = []
        }
        if (summaryCost > 0) {
            note = null
        }
        return (
            <div className={cls.itemContainer}>
                <Fade top><h1 className={cls.title}>Корзина товаров</h1></Fade>
                <Zoom>
                    <div>
                    {itemsElements}
                    </div>
                </Zoom>
                {note}
                <Fade bottom>
                    <div className={cls.addOrder}>
                        <h3>Общая стоимость товаров: {summaryCost} BYN</h3>
                        <OrderForm summaryCost={summaryCost}
                                   items={items}
                                   userEmail={this.props.userEmail}
                        />
                    </div>
                </Fade>
            </div>
        )
    }
}