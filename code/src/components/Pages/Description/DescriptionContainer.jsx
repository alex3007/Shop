import React from 'react';
import Description from './Description';
import {compose} from "redux";
import {connect} from "react-redux";
import {addBuingItem} from "../../../redux/buyItem-reducer";
import {toggleIsOpen} from "../../../redux/auth-reducer";

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
                        {...props}/>
};

let mapStateToProps = (state) => {
    return {
        buingItems: state.buyItem.buingItems,
        isAuth: state.auth.isAuth
    }
};

export default compose(connect(mapStateToProps, {addBuingItem,toggleIsOpen}))(DescriptionContainer);

