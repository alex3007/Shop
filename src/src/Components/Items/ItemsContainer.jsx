import Items from './Items';
import {connect} from "react-redux";
import {newSoulPathAC} from "../../Redux/items-reducer";
import {withRouter} from 'react-router-dom';

let mapStateToProps = (state) => {

        let currentSoul;
        let path = state.sidebar.currentPath;
        let soulPath = state.items.currentSoulPath;

         switch (path) {
            case '/controllers':
                currentSoul = state.items.data.default.controllers;
                break;
            case '/sencors':
                currentSoul = state.items.data.default.sencors;
                break;
            case '/interfaces':
                currentSoul = state.items.data.default.interfaces;
                break;
             case '/cables':
                 currentSoul = state.items.data.default.cables;
                 break;
             case '/modules':
                 currentSoul = state.items.data.default.modules;
                 break;

             default: currentSoul = state.items.data.default.controllers ;
        }
        return {
            soul: currentSoul,
            soulPath: soulPath,
            path: path
        }
    };


let mapDispatchToProps = (dispatch) => {

    return {
        newSoulPath: (path) => {

            dispatch(newSoulPathAC(path));
        }
    }
};

let WithRouterItems = withRouter(Items);

const ItemsContainer = connect(mapStateToProps, mapDispatchToProps)(WithRouterItems);

export default ItemsContainer;
