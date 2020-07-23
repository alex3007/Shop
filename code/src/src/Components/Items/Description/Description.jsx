import React from 'react';
import cls from './Description.module.css';
import Fade from 'react-reveal/Fade';
import OrderForm from './OrderForm/OrderForm';

const Description = (props) => {

    let itemDescription = props.itemDescription;
    let modalContainer;
    if (itemDescription !== 'loading') {
        itemDescription =
            <Fade>
                <div className={cls.container}>
                    <h4><b>Название товара: </b>{itemDescription.name}</h4>
                    <img src={itemDescription.photo}/>
                    <p><b>Особенности: </b>{itemDescription.description}</p>
                    <OrderForm productName={itemDescription.name} />
                </div>
            </Fade>
    }
    else {
        itemDescription = null
    }
    return (
        <div>
            {itemDescription}
        </div>
    )
};

export default Description;


