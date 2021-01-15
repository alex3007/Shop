import React from 'react';
import cls from './Description.module.css';
import Fade from 'react-reveal/Fade';
import {v4 as uuidv4} from 'uuid';
import {NavLink} from "react-router-dom";


export default class Description extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buyed: false
        };
    }

    onBuyProduct = () => {
        if (this.props.isAuth) {
            let itemDescription = this.props.itemDescription;
            let item = {
                name: itemDescription.name,
                photo: itemDescription.photo,
                cost: itemDescription.cost,
                quantity: 1,
                path: itemDescription.path,
                id: uuidv4()
            };
            this.props.addBuingItem(item);
            this.setState({buyed:true})
        } else {
            this.props.toggleIsOpen(true)
        }
    }

    render() {

        let itemDescription = this.props.itemDescription;
        if (itemDescription !== 'loading') {
            itemDescription =
                <Fade>
                    <div className={cls.container}>
                        <h4>{itemDescription.name}</h4>
                        <img src={itemDescription.photo}/>
                        <p><b>Цена: </b>{itemDescription.cost} BYN</p>
                        <p><b>Характеристики: </b></p>
                        <ul>
                            {itemDescription.description.map(e => <li>{e}</li>)}
                        </ul>
                        {!this.state.buyed?
                            <a onClick={this.onBuyProduct}
                               className={cls.confirmButton}>
                                Добавить вкорзину</a>:
                            <NavLink to='/basket'
                                     className={cls.confirmButton}>Товар в
                            корзине</NavLink>}
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


