import React from 'react';
import cls from './MiniSidebar.module.css'
import Slide from 'react-reveal/Slide';

const MiniSidebar = (props) => {
    let title = [{name:"Быстрая доставка!"},
        {name:"Различные способы оплаты!"},
        {name:"Скидки постоянным клиентам!"},
        {name:"Подарки!"}]
    const move = () => {
        return alert('настройка закрытия')
    };
    let sidebarElements = title
        .map(e => (<p className={cls.link}>
            {e.name}
        </p>));
    return (
        <Slide left>
        <div className={cls.sidebarContainer}>
            <div className={cls.sidebar}>
                {sidebarElements}
            </div>
            <div className={cls.onMoving}>
                <p onClick={move} className={cls.onMovingLabel}>X</p>
            </div>
        </div>
        </Slide>
    )
};
export default MiniSidebar;