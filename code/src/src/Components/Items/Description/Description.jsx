import React from 'react';
import cls from './Description.module.css';
import Preloader from "../../../common/Preloader/Preloader";

const Description = (props) => {
    let itemDescription = props.itemDescription;
    if (itemDescription !== 'loading') {
        itemDescription =
            <div>{itemDescription.name}
                {itemDescription.description}</div>
    }
    else {
        itemDescription = <Preloader/>
    }
    return  <div className={cls.flexItemsContainer}>
            {itemDescription}
        </div>
};

export default Description;
