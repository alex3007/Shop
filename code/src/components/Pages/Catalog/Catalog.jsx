import React from 'react';
import cls from './Catalog.module.css'
import {NavLink} from "react-router-dom";
import ActionCards from "./ActionCards/ActionCards";
import CarouselBody from "./Carousel/CarouselBody";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

export default class Catalog extends React.Component {

    render() {
        let sidebarElements = this.props.products
            .map(e => (<NavLink className={cls.item} to={e.path}
                                activeClassName={cls.active}><Zoom>
                <img src={e.photo}/>
                <h3 className={cls.itemName}>{e.name}</h3></Zoom>
            </NavLink>));
        return (
            <div className={cls.catalog}>
                <div className={cls.actions}>
                    <Fade><CarouselBody/></Fade>
                    <Fade><ActionCards/></Fade>
                </div>
                <div ref={this.wrapperRef} className={cls.catalogContainer}>
                    {sidebarElements}
                </div>
            </div>
        );
    }
}