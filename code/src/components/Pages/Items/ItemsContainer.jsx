import React from 'react';
import Items from './Items';
import {compose} from "redux";
import {connect} from "react-redux";

const ItemsContainer = (props) => {

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

    return <Items products={items}
                  itemsName={itemsName}
                  productsParams={productsParams}/>
}

let mapStateToProps = (state) => {
    return {
        products: state.items.products,
    }
};

export default compose(connect(mapStateToProps))(ItemsContainer);



