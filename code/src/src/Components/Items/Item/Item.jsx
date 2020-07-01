import React from 'react';
import cls from './Item.module.css';
import {NavLink} from "react-router-dom";
import photo from '../../../Assets/images/photo.jpg';
import Bounce from 'react-reveal/Bounce';
import actionOne from '../../../Assets/images/act1.jpg';
import actionTwo from '../../../Assets/images/act2.jpg';

const Item = (props) => {
    let productsParams = props.productsParams;
    let items = props.products;
    let itemsElements;
    if (items !== 'loading') {
        itemsElements = items.map(e => (<Bounce bottom>
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
                        <NavLink className={cls.buyButton} to={"/#"}>Заказать</NavLink>
                    </div>
                </NavLink></Bounce>
        ))
    }
    return (
        <div>
            <div className={cls.actions}>
                <NavLink className={cls.actionNav} to={"/actions"}><Bounce delay={100}><img src={actionOne}/></Bounce></NavLink>
                <NavLink className={cls.actionNav} to={"/actions"}><Bounce delay={200}><img src={actionTwo}/></Bounce></NavLink>
            </div>
            <div className={cls.flexItemsContainer}>
                {itemsElements}
            </div>
        </div>
    );
};

export default Item;
