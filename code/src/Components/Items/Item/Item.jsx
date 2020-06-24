import React from 'react';
import cls from './Item.module.css';
import {NavLink} from "react-router-dom";
import photo from '../../../Assets/images/photo.jpg';
import Fade from 'react-reveal/Fade';

const Item = (props) => {
    let productsParams = props.productsParams;
    let items = props.products;
    let itemsElements;
    if (items !== 'loading') {
        itemsElements = items.map(e => (<Fade>
            <NavLink className={cls.navLink} to={productsParams ? '/' + productsParams + e.path :
                '/all_products' + e.path}>
                <div className={cls.item}>
                    <p className={cls.itemNew}>Новинка</p>
                    <div className={cls.imageContainer}>
                        <img className={cls.imageExample} src={photo}/>
                    </div>
                    <p className={cls.itemName}>{e.name}</p>
                    <p className={cls.itemDescription}>{e.features}</p>
                    <p className={cls.itemName}>Цена:</p>
                    <p className={cls.itemCost}>{e.cost} BYN</p>
                    <a className={cls.buyButton} href="#">Купить</a>
                </div>
            </NavLink></Fade>
        ))
    }
    return (

        <div className={cls.flexItemsContainer}>
            {itemsElements}
        </div>
    );
};

export default Item;
