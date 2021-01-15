import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";
import Header from "./Header";
import {toggleIsOpen,login,logout} from "../../redux/auth-reducer";

const HeaderContainer = (props) => {

    return <Header {...props} />
};


let mapStateToProps = (state) => {
    return {
        buingItems: state.buyItem.buingItems,
        isOpen: state.auth.isOpen,
        isAuth: state.auth.isAuth,
        userEmail: state.auth.userEmail
    }
};

export default compose(connect(mapStateToProps,{toggleIsOpen,login,logout}))(HeaderContainer);

