import React from 'react';
import cls from './../HeaderTop.module.sass';

const WorkInfo = (props) => {
    return (
        <div className={cls.workInfoBlock}>
            <p>Время работы:</p>
            <p>Пн-Пт: 9:00-18:00</p>
            <p>Сб-Вс: выходные</p>
        </div>
    );
};

export default WorkInfo;
