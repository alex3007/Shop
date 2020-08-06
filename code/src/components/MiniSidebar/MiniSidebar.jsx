import React from 'react';
import cls from './MiniSidebar.module.css'
import Slide from 'react-reveal/Slide';
import marker from '../../assets/images/marker2.png'


export default class miniSidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = [{name: "Скидки постоянным клиентам!"},
            {name: "Подарки!"},
            {name: "Различные способы оплаты!"},
            {name: "Быстрая доставка!"},
            {name: "Техническая поддержка!"}];
        this.wrapperRef = React.createRef();
        this.iRef = React.createRef();
    }

    handleClick() {
        const sidebarWrapper = this.wrapperRef.current;
        sidebarWrapper.classList.toggle(`${cls.wrapperClose}`)
        const iWrapper = this.iRef.current;
        iWrapper.classList.toggle('fa-angle-left')
        iWrapper.classList.toggle('fa-angle-right')
    }

    render() {
        let sidebarElements = this.state
            .map(e => (
                <span className={cls.list}>
            <img src={marker}/>
            <p className={cls.link}>{e.name}</p>
            </span>
            ));
        return (
            <Slide left>
                <div className={cls.sidebarContainer}>
                    <div ref={this.wrapperRef} className={cls.sidebar}>
                        {sidebarElements}
                    </div>
                    <div className={cls.onClickMoving} onClick={() => this.handleClick()}>
                        <i ref={this.iRef} className='fa fa-angle-right'/>
                    </div>
                </div>
            </Slide>
        );
    }
}
