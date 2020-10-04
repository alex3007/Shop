import React from 'react';
import cls from './Catalog.module.css'
import {NavLink} from "react-router-dom";
import ActionCards from "./ActionCards/ActionCards";
import CarouselBody from "./Carousel/CarouselBody";
import packing from '../../../assets/images/pack.jpg'

export default class Catalog extends React.Component {

    render() {
        let sidebarElements = this.props.products
            .map(e => (<NavLink className={cls.item} to={e.path}
                                activeClassName={cls.active}>
                <img src={packing}/>
                <h3 className={cls.itemName}>{e.name}</h3>
            </NavLink>));
        return (
            <div className={cls.catalog}>
                <CarouselBody/>
                <ActionCards/>
                <div ref={this.wrapperRef} className={cls.catalogContainer}>
                    {sidebarElements}
                </div>
            </div>
        );
    }
}