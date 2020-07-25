import React from 'react';
import cls from './Item.module.css';
import {NavLink} from "react-router-dom";
import Zoom from 'react-reveal/Zoom';
import ActionCards from './ActionCards/ActionCards';

const Item = (props) => {

    let productsParams = props.productsParams;
    let items = props.products;
    let itemsElements;
    if (items !== 'loading') {
        itemsElements = items.map(e => (
            <NavLink className={cls.navLink} to={productsParams ? '/' + productsParams + e.path :
                '/all_products' + e.path}>
                <Zoom>
                    <div className={cls.item}>
                        <p className={cls.itemNew}>Новинка</p>
                        <div className={cls.imageContainer}>
                            <img className={cls.imageExample} src={e.photo}/>
                        </div>
                        <p className={cls.itemName}>{e.name}</p>
                        <p className={cls.itemDescription}>{e.features}</p>
                        <p className={cls.itemName}>Цена:</p>
                        <p className={cls.itemCost}>{e.cost} BYN</p>
                        <button className={cls.buyButton}>Подробнее</button>
                    </div>
                </Zoom>
            </NavLink>
        ))
    }
    return (
        <div>
            <ActionCards/>
            <div className={cls.flexItemsContainer}>
                {itemsElements}
            </div>
        </div>
    )
};

export default Item;