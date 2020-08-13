import React from 'react';
import Items from './Items';
import {connect} from "react-redux";
import {toggleIsFetching} from "../../redux/items-reducer";
import {setProducts} from "../../redux/items-reducer";
import {compose} from "redux";
import {getItems} from "../api/api";


class ItemsContainer extends React.Component {
    componentDidMount() {
        getItems().then(data => {
                this.props.setProducts(data);
                this.props.toggleIsFetching(false)
            });
    }

    render() {
        let products = this.props.products;
        let sortedProducts = products.map(e => (e.items));
        let n = sortedProducts.length;
        let unSortedProducts = [];
        for (let i = 0; i <= n - 1; i++) {
            unSortedProducts = unSortedProducts.concat(sortedProducts[i]);
        }
        return <Items products={products}
                      unSortedProducts={unSortedProducts}
                      isFetching={this.props.isFetching}/>
    }
}

let mapStateToProps = (state) => {

    return {
        products: state.items.products,
        isFetching: state.items.isFetching
    }
};

export default compose(connect(mapStateToProps, {setProducts, toggleIsFetching}))(ItemsContainer);

