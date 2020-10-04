import React from 'react';
import cls from './Sidebar.module.css'
import {NavLink} from "react-router-dom";

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.wrapperRef = React.createRef();
        this.iRef = React.createRef();
    }

    handleClick() {
        const sidebarWrapper = this.wrapperRef.current;
        sidebarWrapper.classList.toggle(`${cls.wrapperClose}`)
        const iWrapper = this.iRef.current;
        iWrapper.classList.toggle('fa-angle-right')
    }

    render() {
        let sidebarElements = this.props.products
            .map(e => (<NavLink className={cls.topLink} to={e.path}
                                activeClassName={cls.topActive}>
                {e.name}
            </NavLink>));
        return (
            <div className={cls.sidebarContainer}>
                <div ref={this.wrapperRef} className={cls.sidebar}>
                    <NavLink className={cls.topLink} to='/catalog'
                             activeClassName={cls.topActive}><i className="fa fa-shopping-bag" />Каталог</NavLink>
                    <NavLink className={cls.topLink} to='/actions'
                             activeClassName={cls.topActive}><i className="fa fa-dollar" />Акции</NavLink>
                    <NavLink className={cls.topLink} to='/all_products'
                             activeClassName={cls.topActive}><i className="fa fa-shopping-basket" />Все товары</NavLink>
                    {sidebarElements}

                </div>
                <div className={cls.onClickMoving} onClick={() => this.handleClick()}>
                    <i ref={this.iRef} className='fa fa-angle-left'/>
                </div>
            </div>
        );
    }
}