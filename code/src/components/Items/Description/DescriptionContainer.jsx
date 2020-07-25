import React from 'react';
import Description from './Description';

const DescriptionContainer = (props) => {

    let unSortedProducts = props.unSortedProducts;
    let descriptionParams = props.match.params.description;
    let itemDescription;
    let item = unSortedProducts.find((e) => {
        if ('/' + descriptionParams === e.path) {
            return e
        }
    });
    if (item) {
        itemDescription = item
    } else {
        itemDescription = 'loading'
    }
    return <Description itemDescription={itemDescription}/>
};
export default DescriptionContainer;

