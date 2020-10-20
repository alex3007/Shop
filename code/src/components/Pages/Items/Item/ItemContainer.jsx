import React from 'react';
import Item from './Item';

const ItemContainer = (props) => {

    let items;
    let itemsName;
    let productsParams = props.match.params.products;
    let products = props.products;
    if (!productsParams || productsParams === 'all_products') {
        items = props.unSortedProducts;
        itemsName = 'Все товары';
    } else if (products) {
        items = products.find((e) => {
            return ('/' + productsParams === e.path)
        });
        if (items) {

            itemsName = items.name;
            items = items.items;

        } else {
            items = 'loading'
        }
    }
    return  <Item products={items} itemsName={itemsName} productsParams={productsParams} />
};

export default ItemContainer;

