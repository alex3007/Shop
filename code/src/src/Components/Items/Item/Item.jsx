import React from 'react';
import cls from './Item.module.css';
import {NavLink} from "react-router-dom";
import photo from '../../../Assets/images/photo.jpg';
import Fade from 'react-reveal/Fade';
import actionTree from '../../../Assets/images/act3.jpg';
import actionFour from '../../../Assets/images/act4.jpg';
import actionSix from '../../../Assets/images/act6.jpg';

const Item = (props) => {
    let productsParams = props.productsParams;
    let items = props.products;
    let itemsElements;
    if (items !== 'loading') {
        itemsElements = items.map(e => (<Fade bottom>
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
        <div>
            <div className={cls.actions}>
                <Fade delay={500}><a href="#"><img src={actionTree}/></a></Fade>
                <Fade delay={600}><a><img className={cls.action} src={actionFour}/></a></Fade>
                <Fade delay={700}><a href="#"><img className={cls.action} src={actionSix}/></a></Fade>
            </div>
            <div className={cls.flexItemsContainer}>
                {itemsElements}
            </div>
        </div>
    );
};

export default Item;
