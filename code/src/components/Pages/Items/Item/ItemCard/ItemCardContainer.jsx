import React from 'react';
import ItemCard from './ItemCard';
import {addBuingProductAC} from "../../../../../redux/buyItem-reducer";
import {connect} from "react-redux";
import {compose} from "redux";


const ItemCardContainer = (props) => {

    return <ItemCard path={props.path}
                     photo={props.photo}
                     quantity={props.quantity}
                     name={props.name}
                     cost={props.cost}
                     addBuingProduct={props.addBuingProduct}
                     buingProducts={props.buingProducts}
    />
};

const mapStateToProps = (state) => {
    return {
        buingProducts: state.buyItem.buingProducts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addBuingProduct: (newItem) => {
            dispatch(addBuingProductAC(newItem));
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps))(ItemCardContainer);