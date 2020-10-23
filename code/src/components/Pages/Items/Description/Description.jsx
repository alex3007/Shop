import React from 'react';
import cls from './Description.module.css';
import Fade from 'react-reveal/Fade';
import {NavLink} from "react-router-dom";


export default class Description extends React.Component {
    constructor(props) {
        super(props);
    }

    onBuyProduct = () => {
        let itemDescription = this.props.itemDescription;
        let item = {
            name: itemDescription.name,
            photo: itemDescription.photo,
            cost: itemDescription.cost,
            quantity: 1,
            path: itemDescription.path,
            id: this.props.buingProducts.length + 1
        };
        this.props.addBuingProduct(item);
    }

    render() {

        let itemDescription = this.props.itemDescription;
        if (itemDescription !== 'loading') {
            itemDescription =
                <Fade>
                    <div className={cls.container}>
                        <h4><b>{itemDescription.name}</b></h4>
                        <img src={itemDescription.photo}/>
                        <p><b>{itemDescription.description}</b></p>
                        <NavLink to='/basket' onClick={this.onBuyProduct} className={cls.confirmButton}>Добавить в
                            корзину</NavLink>
                    </div>
                </Fade>
        } else {
            itemDescription = null
        }
        return (
            <div>
                {itemDescription}
            </div>
        )
    }
}


