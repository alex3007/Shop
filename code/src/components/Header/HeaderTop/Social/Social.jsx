import React from 'react';
import cls from './../HeaderTop.module.sass';

const Social = (props) => {
    return (
        <div className={cls.socialBlock}>
            <p><a href="#"><i className=" fa fa-whatsapp"/></a></p>
            <p><a href="#"><i className=" fa fa-telegram"/></a></p>
            <p><a href="#"><i className="fa fa-vk"/></a></p>
        </div>
    );
};

export default Social;
