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
            .map(e => (<NavLink className={cls.link} to={e.path}
                                activeClassName={cls.active}>
                {e.name}
            </NavLink>));
        return (
                <div className={cls.sidebarContainer}>
                    <div ref={this.wrapperRef} className={cls.sidebar}>
                        <NavLink className={cls.link} to={'/all_products'}
                                 activeClassName={cls.active}>Все товары</NavLink>
                        {sidebarElements}
                    </div>
                    <div className={cls.onClickMoving} onClick={() => this.handleClick()}>
                        <i ref={this.iRef} className='fa fa-angle-left'/>
                    </div>
                </div>
        );
    }
}