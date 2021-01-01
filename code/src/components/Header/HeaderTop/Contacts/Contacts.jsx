import React from 'react';
import cls from './../HeaderTop.module.sass';

const Contacts = (props) => {
    return (
            <div className={cls.contactsBlock}>
                <p><i className="fa fa-mobile-phone"/>+375-33-333-22-11</p>
                <p><i className="fa fa-mobile-phone"/>+375-44-333-22-11</p>
                <p className={cls.headerEmail}>
                    <i className="fa fa-envelope-o"/>pneum@info.by</p>
            </div>
    );
};

export default Contacts;
