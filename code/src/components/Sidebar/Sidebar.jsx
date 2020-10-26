import React from 'react';
import cls from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import Slide from "react-reveal/Slide";

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.wrapperIconAreaRef = React.createRef();
        this.wrapContainerRef = React.createRef();
    }

    handleClick() {
        this.wrapperIconAreaRef.current.classList.toggle(`${cls.wrapIconArea}`)
        this.wrapperIconAreaRef.current.firstChild.classList.toggle('fa-navicon')
        this.wrapperIconAreaRef.current.firstChild.classList.toggle('fa-close')
        this.wrapContainerRef.current.classList.toggle(`${cls.wrapContainer}`)
        this.wrapContainerRef.current.firstChild.classList.toggle(`${cls.wrapSidebar}`)

    }

    render() {
        let sidebarElements = this.props.products
            .map(e => (<NavLink className={cls.link} to={e.path}
                                activeClassName={cls.active}>
                {e.name}
            </NavLink>));
        return (
            <div ref={this.wrapContainerRef} className={cls.sidebarContainer}>
                <Slide left>
                    <div className={cls.sidebar}>
                        <NavLink className={cls.topLink} to='/catalog'
                                 activeClassName={cls.topActive}><i className="fa fa-shopping-bag"/>Каталог</NavLink>
                        <NavLink className={cls.topLink} to='/actions'
                                 activeClassName={cls.topActive}><i className="fa fa-dollar"/>Акции</NavLink>
                        <NavLink className={cls.topLink} to='/all_products'
                                 activeClassName={cls.topActive}><i className="fa fa-shopping-basket"/>Все
                            товары</NavLink>
                        {sidebarElements}
                        <div className={cls.sidebarFooter}></div>
                    </div>
                </Slide>
                <div ref={this.wrapperIconAreaRef} className={cls.movingIconArea} onClick={() => this.handleClick()}>
                    <i className='fa fa-2x fa-navicon '/>
                </div>
            </div>
        );
    }
}