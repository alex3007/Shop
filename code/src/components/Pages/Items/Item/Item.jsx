import React from 'react';
import cls from './Item.module.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import ItemCardContainer from "./ItemCard/ItemCardContainer";

const Item = (props) => {

    let productsParams = props.productsParams;
    let items = props.products;
    let itemsElements;
    if (items !== 'loading') {
        itemsElements = items.map(e => (
            <ItemCardContainer path={e.path}
                               photo={e.photo}
                               features={e.features}
                               name={e.name}
                               cost={e.cost}
                               productsParams={productsParams}
            />
        ))
    }
    return (
        <div>
            <Fade top>
                <h1 className={cls.title}>{props.itemsName}</h1>
            </Fade>
            <Zoom>
                <div className={cls.flexItemsContainer}>
                    {itemsElements}
                </div>
            </Zoom>
        </div>
    )
};

export default Item;