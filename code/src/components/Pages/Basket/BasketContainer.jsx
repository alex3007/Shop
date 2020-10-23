import React from 'react';
import Basket from "./Basket";
import {compose} from "redux";
import {connect} from "react-redux";
import {addDeleteProduct} from "../../../redux/buyItem-reducer";

const BasketContainer = (props) => {
    return (

        <Basket
            items={props.buingProducts}
            addDeleteProduct={props.addDeleteProduct}
            allProductsQuantity={props.buingProducts.length}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        buingProducts: state.buyItem.buingProducts,

    }
};

export default compose(
    connect(mapStateToProps, {addDeleteProduct}))(BasketContainer);