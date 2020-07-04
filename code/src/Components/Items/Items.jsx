import React from 'react';
import cls from './Items.module.css';
import {withRouter, Switch, Route} from 'react-router-dom';
import ItemContainer from './Item/ItemContainer';
import DescriptionContainer from './Description/DescriptionContainer';
import Sidebar from "./Sidebar/Sidebar";
import Preloader from "../../common/Preloader/Preloader";
import Slide from 'react-reveal/Slide';

const Items = (props) => {

    let WithRouterItemContainer = withRouter(ItemContainer);
    let WithRouterDescriptionContainer = withRouter(DescriptionContainer);
    return (
            <div className={cls.flexContainer}>
                <Slide left>
                    <Sidebar products={props.products}/>
                </Slide>
                {props.isFetching ? <Preloader/> : null}
                <div className={cls.items}>
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
            </div>
    )
};

export default Items;