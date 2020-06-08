import React from 'react';
import cls from './Items.module.css';
import {Switch, Route} from 'react-router-dom';
import Item from './Item/Item';
import Description from './Description/Description';
import CarouselItem from '../Carousel/CarouselItem';
import SidebarContainer from './Sidebar/SidebarContainer';

const Items = (props) => {
    debugger
    return (
        <div className={cls.container}>
            <CarouselItem/>
            <div className={cls.flexContainer}>
                <div className={cls.sidebar}>
                    <SidebarContainer/>
                </div>
                <div className={cls.items}>
                        <Route exact path={props.path} render=
                            {() => <Item path={props.path} soul={props.soul} newSoulPath={props.newSoulPath}/>}/>

                        <Route path={props.soulPath === "/"? props.soulPath:props.path+props.soulPath} render=
                            {() => <Description history={props.history} soul={props.soul}
                                                soulPath={props.soulPath}/>
                            }/>
                </div>
            </div>
        </div>
    )
};

export default Items;
