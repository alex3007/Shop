import React from 'react';
import ItemCard from './ItemCard';
import {compose} from "redux";
import {connect} from "react-redux";
import {addBuingProduct} from "../../../../redux/buyItem-reducer";

const ItemCardContainer = (props) => {


    return <ItemCard
                     path={props.path}
                     photo={props.photo}
                     features={props.features}
                     name={props.name}
                     cost={props.cost}
                     productsParams={props.productsParams}
                     addBuingProduct={props.addBuingProduct}
                     buingProducts={props.buingProducts}/>
};


let mapStateToProps = (state) => {
    return {
        buingProducts: state.buyItem.buingProducts
    }
};

export default compose(connect(mapStateToProps, {addBuingProduct}))(ItemCardContainer);

