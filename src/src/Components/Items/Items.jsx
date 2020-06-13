import React from 'react';
import cls from './Items.module.css';
import {Switch, Route} from 'react-router-dom';
import Item from './Item/Item';
import Description from './Description/Description';
import Sidebar from "./Sidebar/Sidebar";
import CarouselItem from "./Carousel/CarouselItem";

export default class Items extends React.Component {
    render() {

        let productTypes = this.props.sortedProducts.map(e => {

            let sortedProductsDescription = e.items.map(p => (
                <Route path={p.path} render=
                    {() => <Description history={this.props.history} name={p.name}
                                        description={p.description}/>}/>
            ));

            return (
                <div>
                    {sortedProductsDescription}
                    <Route exact path={'/:params'} render=
                        {() => {
                            if( this.props.match.params === e.path ){
                            return (
                                <Item sortedProducts={e.items} path={e.path}/>
                            )} else{return (<p>не найдено</p>)}
                        }}/>

                </div>
            )
        });

        return (

            <div className={cls.container}>
                <CarouselItem/>
                <div className={cls.flexContainer}>
                    <Sidebar products={this.props.sortedProducts} className={cls.sidebar}/>
                    <div className={cls.items}>
                        {productTypes}
                        <Route exact path={'/'} render=
                            {() => <Item sortedProducts={this.props.unSortedProducts}/>}/>
                    </div>
                </div>
            </div>

        )
    }
};

