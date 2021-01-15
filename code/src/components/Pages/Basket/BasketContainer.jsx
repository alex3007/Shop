import React from 'react';
import Basket from "./Basket";
import {compose} from "redux";
import {connect} from "react-redux";
import {getBuingItems, deleteBuingItem,updateBuingItem, isFetching} from "../../../redux/buyItem-reducer";

class BasketContainer extends React.Component {

    componentDidMount() {
        this.props.getBuingItems()
    }

    render() {
        return (
            <Basket
                items={this.props.buingItems}
                deleteItem={this.props.deleteBuingItem}
                updateItem={this.props.updateBuingItem}
                allProductsQuantity={this.props.buingItems.length}
                userEmail={this.props.userEmail}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        buingItems: state.buyItem.buingItems,
        updateBuingItem: state.buyItem.updateBuingItem,
        userEmail: state.auth.userEmail

    }
};

export default compose(connect(mapStateToProps, {
    getBuingItems, deleteBuingItem, updateBuingItem, isFetching
}))(BasketContainer);
