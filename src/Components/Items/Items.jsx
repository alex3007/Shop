import React from 'react';
import cls from './Items.module.css';
import {Route} from 'react-router-dom';
import Item from './Item/Item';
import Description from './Description/Description';
import CarouselItem from '../Carousel/Carousel';
import SidebarContainer from './Sidebar/SidebarContainer';


const Items = (props) => {
    return (

        <div>
            <CarouselItem/>
            <div className={cls.flexContainer}>
                <div className={cls.sidebar}>
                    <SidebarContainer/>
                </div>
                <div className={cls.items}>
                    <Route path={props.path} render=
                        {() => <Item path={props.path} soul={props.soul} newSoulPath={props.newSoulPath}/>}/>

                    <Route path={props.soulPath} render=
                        {() => { if(props.soulPath === ""){
                            return <div></div>
                        }
                        else{
                                return <Description history={props.history} soul={props.soul}
                                                    soulPath={props.soulPath}/>
                            }}
                        }/>
                </div>
            </div>
        </div>
    )
};

export default Items;
