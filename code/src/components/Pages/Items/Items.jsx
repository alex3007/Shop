import React from 'react';
import {withRouter,Redirect, Route} from 'react-router-dom';
import ItemContainer from './Item/ItemContainer';
import DescriptionContainer from './Description/DescriptionContainer';
import Catalog from "../Catalog/Catalog";

const Items = (props) => {

    let WithRouterItemContainer = withRouter(ItemContainer);
    let WithRouterDescriptionContainer = withRouter(DescriptionContainer);
    return (
        <div>

            <Route exact path='/'
                   render={() => <Redirect to={"/Catalog"}/>}/>
            <Route path="/Catalog" render={() =>
                <Catalog
                    products={props.products}/>}/>
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