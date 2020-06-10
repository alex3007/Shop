import React from 'react';
import ItemsContainer from '../../Items/ItemsContainer';
import cls from './Catalog.module.css';


const Catalog = () => {

    return (
        <div className={cls.container}>
                <ItemsContainer/>
        </div>
    );
};

export default Catalog;