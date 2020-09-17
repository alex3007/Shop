import React from 'react';
import Items from './Items';


export default class ItemsContainer extends React.Component {

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

