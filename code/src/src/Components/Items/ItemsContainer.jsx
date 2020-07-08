import React from 'react';
import Items from './Items';
import {connect} from "react-redux";
import {toggleIsFetching} from "../../Redux/items-reducer";
import * as axios from "axios";
import {setProducts} from "../../Redux/items-reducer";
import {compose} from "redux";


class ItemsContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://alex3007.github.io/Portfolio/data.json`)
            .then(response => {
                this.props.setProducts(response.data);
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

