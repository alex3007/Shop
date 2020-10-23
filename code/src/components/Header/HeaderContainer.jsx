import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import Header from "./Header";

const HeaderContainer = (props) => {

    return <Header buingProducts={props.buingProducts} />
};


let mapStateToProps = (state) => {
    return {
        buingProducts: state.buyItem.buingProducts
    }
};

export default compose(connect(mapStateToProps))(HeaderContainer);

