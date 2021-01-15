import React from 'react';
import './App.css';
import store from "./redux/redux-store";
import {HashRouter, withRouter, Switch, Route, Redirect} from 'react-router-dom';
import HeaderContainer from "./components/Header/HeaderContainer";
import Sidebar from "./components/Sidebar/Sidebar";
import Delivery from "./components/Pages/Delivery/Delivery";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Contacts from "./components/Pages/Contacts/Contacts";
import Actions from "./components/Pages/Actions/Actions";
import BasketContainer from "./components/Pages/Basket/BasketContainer"
import ItemContainer from "./components/Pages/Items/ItemsContainer";
import DescriptionContainer from "./components/Pages/Description/DescriptionContainer";
import Catalog from "./components/Pages/Catalog/Catalog";
import Footer from './components/Footer/Footer';
import Fade from 'react-reveal/Fade';
import Slide from "react-reveal/Slide";
import withReveal from 'react-reveal/withReveal';
import {compose} from "redux";
import {Provider, connect} from "react-redux";
import {getProducts, toggleIsFetching} from "./redux/app-reducer";
import {getLogin} from "./redux/auth-reducer";
import Preloader from "./components/Preloader/Preloader";
import Registration from "./components/Pages/Login/Registration/Registration";


class App extends React.Component {

    componentDidMount() {
            this.props.getProducts();
            this.props.toggleIsFetching(false);
            this.props.getLogin()
    }

    render() {
        let products = this.props.products;
        let sortedProducts = products.map(e => (e.items));
        let n = sortedProducts.length;
        let unSortedProducts = [];
        for (let i = 0; i <= n - 1; i++) {
            unSortedProducts = unSortedProducts.concat(sortedProducts[i]);
        }
        let WithRouterItemContainer = withRouter(ItemContainer);
        let WithRouterDescriptionContainer = withRouter(DescriptionContainer);
        return (
            <div className="App">
                <div className={"header"}>
                    <Slide top>
                        <HeaderContainer/>
                    </Slide>
                </div>

                <div className='flexContainer'>
                    <Sidebar className={"sidebar"} products={products}/>
                    <div className='pagesContainer'>
                        <Switch>
                            <Route exact path='/'
                                   render={() => <Redirect to={"/Catalog"}/>}/>
                            <Route path="/contacts" component={withReveal(Contacts, <Fade/>)}/>
                            <Route path="/about_us" component={AboutUs}/>
                            <Route path="/actions" component={Actions}/>
                            <Route path="/delivery" component={Delivery}/>
                            <Route path="/basket" component={BasketContainer}/>
                            <Route path="/registration" component={Registration}/>
                            <Route path="/catalog" render={() =>
                                <Catalog
                                    products={products}/>}/>
                            <Route path='/:products/:description'
                                   render={() =>
                                       <WithRouterDescriptionContainer
                                           unSortedProducts={unSortedProducts}/>}/>
                            <Route path='/:products?'
                                   render={() =>
                                       <WithRouterItemContainer
                                           unSortedProducts={unSortedProducts}/>}/>
                        </Switch>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.items.products,
        isFetching: state.items.isFetching,
    }
};

let AppContainer = compose(connect(mapStateToProps,
    {getProducts, toggleIsFetching, getLogin}))(App);

const AppJs = (props) => {
    return <HashRouter>
        <Provider store={store}>
            {store.isFetching ? <Preloader/> : null}
            <AppContainer/>
        </Provider>
    </HashRouter>
};

export default AppJs;
