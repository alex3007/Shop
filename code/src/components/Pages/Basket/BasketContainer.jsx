import React from 'react';
import Basket from "./Basket";
import {compose} from "redux";
import {connect} from "react-redux";
import {addDeleteProductAC} from "../../../redux/buyItem-reducer";

const BasketContainer = (props) => {

    return (
        <Basket
            items={props.buingProducts}
            addDeleteProduct={props.addDeleteProduct}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        buingProducts: state.buyItem.buingProducts
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        addDeleteProduct: (newId) => {
            dispatch(addDeleteProductAC(newId));
        }
    }
};

export default compose(
    connect(mapStateToProps,mapDispatchToProps))(BasketContainer);