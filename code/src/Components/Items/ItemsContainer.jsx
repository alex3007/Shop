import React from 'react';
import Items from './Items';
import {connect} from "react-redux";
import {newSoulPathAC} from "../../Redux/items-reducer";
import * as axios from "axios";
import {setProducts} from "../../Redux/items-reducer";
import {compose} from "redux";

class ItemsContainer extends React.Component {
    componentDidMount() {
        axios.get(`http://alex300785.ws2.cloudpark.tech/React/Social/data.json`)
            .then(response => {
                this.props.setProducts(response.data);
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
        return <Items products = {products}
                      unSortedProducts = {unSortedProducts} />
    }
}

let mapStateToProps = (state) => {

    return {
        products: state.items.products
    }
};

/*
let mapDispatchToProps = (dispatch) => {

    return {
        newSoulPath: (path) => {

            dispatch(newSoulPathAC(path));
        },
        setProducts: (data) => {

            dispatch(setProductsAC(data));
        },
    }
};*/
export default compose( connect(mapStateToProps, {setProducts}))(ItemsContainer);

