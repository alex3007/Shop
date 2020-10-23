import React from 'react';
import cls from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.iRef = React.createRef();
        this.wrapperAreaRef = React.createRef();
        this.wrapContainerRef = React.createRef();
    }

    handleClick() {
        this.wrapperRef.current.classList.toggle(`${cls.wrapperClose}`)
        this.iRef.current.classList.toggle('fa-angle-right')
        this.wrapperAreaRef.current.classList.toggle(`${cls.wrapperArea}`)
        this.wrapContainerRef.current.classList.toggle(`${cls.wrapperContainer}`)
    }

    render() {
        let sidebarElements = this.props.products
            .map(e => (<NavLink className={cls.link} to={e.path}
                                activeClassName={cls.active}>
                {e.name}
            </NavLink>));
        return (
            <div ref={this.wrapContainerRef} className={cls.sidebarContainer}>
                <div  ref={this.wrapperRef} className={cls.sidebar}>
                    <NavLink className={cls.topLink} to='/catalog'
                             activeClassName={cls.topActive}><i className="fa fa-shopping-bag"/>Каталог</NavLink>
                    <NavLink className={cls.topLink} to='/actions'
                             activeClassName={cls.topActive}><i className="fa fa-dollar"/>Акции</NavLink>
                    <NavLink className={cls.topLink} to='/all_products'
                             activeClassName={cls.topActive}><i className="fa fa-shopping-basket"/>Все
                        товары</NavLink>
                    {sidebarElements}
                </div>
                <div ref={this.wrapperAreaRef} className={cls.onClickMoving} onClick={() => this.handleClick()}>
                    <i ref={this.iRef} className='fa fa-2x fa-angle-left '/>
                </div>
            </div>
        );
    }
}