import Items from './Items';
import {connect} from "react-redux";
import {newSoulPathAC} from "../../Redux/items-reducer";
import {withRouter} from 'react-router-dom';

let mapStateToProps = (state) => {
    let sortedProducts = state.items.data.default;
    let allProducts = sortedProducts.map(e=>(e.items));
    let n = allProducts.length;
    let unSortedProducts = [];

    for (let i = 0; i <= n-1; i++){
        unSortedProducts = unSortedProducts.concat(allProducts[i]);
    }
    return {
        unSortedProducts: unSortedProducts,
        sortedProducts: sortedProducts,
    }
};


let mapDispatchToProps = (dispatch) => {

    return {
        newSoulPath: (path) => {

            dispatch(newSoulPathAC(path));
        }
    }
};

let WithRouterItems = withRouter(Items);

const ItemsContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouterItems);

export default ItemsContainer;
