import React from 'react';
import ItemCard from './ItemCard';
import {compose} from "redux";
import {connect} from "react-redux";
import {addBuingItem} from "../../../../redux/buyItem-reducer";
import {toggleIsOpen} from "../../../../redux/auth-reducer";

const ItemCardContainer = (props) => {


    return <ItemCard
        {...props}/>
};


let mapStateToProps = (state) => {
    return {
        buingItems: state.buyItem.buingItems,
        isAuth: state.auth.isAuth
    }
};

export default compose(connect(mapStateToProps, {addBuingItem,toggleIsOpen}))(ItemCardContainer);

