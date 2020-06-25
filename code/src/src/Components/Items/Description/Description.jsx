import React from 'react';
import cls from './Description.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import Fade from 'react-reveal/Fade';

const Description = (props) => {
    let itemDescription = props.itemDescription;
    if (itemDescription !== 'loading') {
        itemDescription =
            <Fade>
                <div>{itemDescription.name}
                    {itemDescription.description}
                </div>
            </Fade>
    }
    else {
        itemDescription = <Preloader/>
    }
    return <div className={cls.flexItemsContainer}>
        {itemDescription}
    </div>
};

export default Description;
