import React from 'react';
import cls from './Item.module.css';
import {NavLink} from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import ActionCards from './ActionCards/ActionCards';
import Carousel from "./Carousel/CarouselBody";

const Item = (props) => {

    let productsParams = props.productsParams;
    let items = props.products;
    let itemsElements;
    let actionCards;
    let carousel;
    let Buy = () => {
        return (
            alert('Товар добавлен в корзину!')
        )
    }
    if (productsParams === 'all_products' || !productsParams) {
        actionCards = <ActionCards/>
        carousel = <Carousel/>
    } else {
        actionCards = null
        carousel = null
    }
    if (items !== 'loading') {
        itemsElements = items.map(e => (

            <Zoom>
                <div className={cls.item}>
                    <NavLink className={cls.navLink} to={productsParams ? '/' + productsParams + e.path :
                        '/all_products' + e.path}>
                        <div className={cls.imageContainer}>
                            <img className={cls.imageExample} src={e.photo}/>
                        </div>
                        <p className={cls.itemName}>{e.name}</p>
                        <p className={cls.itemDescription}>{e.features}</p>
                        <p className={cls.itemName}>Цена:</p>
                        <p className={cls.itemCost}>{e.cost} BYN</p>
                    </NavLink>
                    <div className={cls.itemFooter}>
                        <input className={cls.productQuantity}/>
                        <div className={cls.controlsArea}>
                            <button className={cls.quantityControls}>+</button>
                            <button className={cls.quantityControls}>-</button>
                        </div>
                        <a onClick={Buy} className={cls.buyButton}>Купить</a>
                    </div>
                </div>
            </Zoom>

        ))
    }
    return (
        <div>
            <div className={cls.actions}>
                {carousel}
                {actionCards}
            </div>
            <div className={cls.flexItemsContainer}>
                {itemsElements}
            </div>
        </div>
    )
};

export default Item;