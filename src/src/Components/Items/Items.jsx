import React from 'react';
import cls from './Items.module.css';
import {Switch, Route} from 'react-router-dom';
import Item from './Item/Item';
import Description from './Description/Description';
import Sidebar from "./Sidebar/Sidebar";
import CarouselItem from "./Carousel/CarouselItem";
const Items = (props) => {

    let productTypes = props.sortedProducts.map(e => (
                <Route path={e.path} render=
                    {() => <Item sortedProducts={e.items}   />}/>

                /*<Route path={props.soulPath} render=
                    {() => <Description history={props.history} soul={props.soul}
                                        soulPath={props.soulPath}/>
                    }/>*/
            ));
    return (

        <div className={cls.container}>
            <CarouselItem/>
            <div className={cls.flexContainer}>
                <Sidebar products={props.sortedProducts} className={cls.sidebar}/>
                <div className={cls.items}>
                    <Switch>
                        {productTypes}
                        <Route path={'/'} render=
                            {() => <Item sortedProducts={props.unSortedProducts}   />}/>
                    </Switch>
                </div>
            </div>
        </div>

    )
};

export default Items;
