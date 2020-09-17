import React from 'react';
import {withRouter, Route} from 'react-router-dom';
import ItemContainer from './Item/ItemContainer';
import DescriptionContainer from './Description/DescriptionContainer';

const Items = (props) => {

    let WithRouterItemContainer = withRouter(ItemContainer);
    let WithRouterDescriptionContainer = withRouter(DescriptionContainer);
    return (
        <div>
            <Route exact path='/:products?'
                   render={() =>
                       <WithRouterItemContainer
                           products={props.products}
                           unSortedProducts={props.unSortedProducts}/>}/>
            <Route path='/:products/:description'
                   render={() =>
                       <WithRouterDescriptionContainer
                           unSortedProducts={props.unSortedProducts}/>}/>
        </div>
    )
};

export default Items;