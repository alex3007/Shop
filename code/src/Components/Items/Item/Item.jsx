import React from 'react';
import cls from './Item.module.css';
import {NavLink} from "react-router-dom";
import photo from '../../../assets/images/photo.jpg';
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';
import actionOne from '../../../assets/images/act1.jpg';
import actionTwo from '../../../assets/images/act2.jpg';

export default class Item extends React.Component {

    render() {
        let productsParams = this.props.productsParams;
        let items = this.props.products;
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
                <div className={cls.actions}>
                    <NavLink className={cls.actionNav} to={"/actions"}><Bounce delay={100}><img
                        src={actionOne}/></Bounce></NavLink>
                    <NavLink className={cls.actionNav} to={"/actions"}><Bounce delay={200}><img
                        src={actionTwo}/></Bounce></NavLink>
                </div>
                <div className={cls.flexItemsContainer}>
                    {itemsElements}
                </div>
            </div>
        )
    }
}