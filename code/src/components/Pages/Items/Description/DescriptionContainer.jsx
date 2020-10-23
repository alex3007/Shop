import React from 'react';
import Description from './Description';
import {compose} from "redux";
import {connect} from "react-redux";
import {addBuingProduct} from "../../../../redux/buyItem-reducer";

const DescriptionContainer = (props) => {

    let unSortedProducts = props.unSortedProducts;
    let descriptionParams = props.match.params.description;
    let itemDescription;
    let item = unSortedProducts.find((e) => {
        if ('/' + descriptionParams === e.path) {
            return e
        }
    });
    if (item) {
        itemDescription = item
    } else {
        itemDescription = 'loading'
    }
    return <Description itemDescription={itemDescription}
                        addBuingProduct={props.addBuingProduct}
                        buingProducts={props.buingProducts}/>
};

let mapStateToProps = (state) => {
    return {
        buingProducts: state.buyItem.buingProducts
    }
};

export default compose(connect(mapStateToProps, {addBuingProduct}))(DescriptionContainer);

