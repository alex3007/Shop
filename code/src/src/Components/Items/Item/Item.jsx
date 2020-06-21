import React from 'react';
import cls from './Item.module.css';
import {NavLink} from "react-router-dom";
import photo from '../../../Assets/images/photo.jpg'

const Item = (props) => {
    let itemsElements = props.sortedProducts
        .map(e => (
            <NavLink onClick={(p) => {
            }} className={cls.navLink} to={e.path}>
                <div className={cls.item}>
                    <p className={cls.itemNew}>Новинка</p>
                    <div className={cls.imageContainer}>
                        <img className={cls.imageExample} src={photo}/>
                    </div>
                    <p className={cls.itemName}>{e.name}</p>
                    <p className={cls.itemDescription}>Качество и доступность</p>
                    <p className={cls.itemName}>Цена:</p>
                    <p className={cls.itemCost}>65 BYN</p>
                    <a className={cls.buyButton} href="#">Купить</a>
                </div>
            </NavLink>
        ));
      return (

        <div className={cls.flexItemsContainer}>
            {itemsElements}
        </div>
    );
};

export default Item;
