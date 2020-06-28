import React from 'react';
import cls from './Description.module.css';
import Preloader from "../../../common/Preloader/Preloader";
import Fade from 'react-reveal/Fade';
import photo from './../../../Assets/images/photo.jpg'

const Description = (props) => {
    let itemDescription = props.itemDescription;
    if (itemDescription !== 'loading') {
        itemDescription =
            <Fade>
                <div className={cls.container}>
                    <h4><b>Название товара: </b>{itemDescription.name}</h4>
                    <img src={photo}/>
                    <p><b>Особенности: </b>{itemDescription.description}</p>
                </div>
            </Fade>
    }
    else {
        itemDescription = <Preloader/>
    }
    return <div>
        {itemDescription}
    </div>
};

export default Description;
