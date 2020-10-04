import React from 'react';
import './App.css';
import store from "./redux/redux-store";
import {HashRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from "./components/Sidebar/Sidebar";
import Delivery from "./components/Pages/Delivery/Delivery";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Contacts from "./components/Pages/Contacts/Contacts";
import Actions from "./components/Pages/Actions/Actions";
import Catalog from "./components/Pages/Catalog/Catalog";
import ItemsContainer from "./components/Pages/Items/ItemsContainer";
import Fade from 'react-reveal/Fade';
import Slide from "react-reveal/Slide";
import withReveal from 'react-reveal/withReveal';
import {getItems} from "./components/api/api";
import {compose} from "redux";
import {Provider, connect} from "react-redux";
import {setProducts, toggleIsFetching} from "./redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        getItems().then(data => {
            this.props.setProducts(data);
            this.props.toggleIsFetching(false)
        });
    }

    render() {
        let products = this.props.products;
        return (
                <div className="App">
                    <div className={"header"}>
                        <Header/>
                    </div>
                    <div className='flexContainer'>
                        <Slide left>
                            <Sidebar products={products}/>
                        </Slide>
                        <div className='pagesContainer'>
                            <Switch>
                                <Route path="/contacts" component={withReveal(Contacts, <Fade in unmountOnExit/>)}/>
                                <Route path="/about_us" component={AboutUs}/>
                                <Route path="/actions" component={Actions}/>
                                <Route path="/delivery" component={Delivery}/>
                                <Route path="/" render={() =>
                                           <ItemsContainer
                                               products={products}
                                               isFetching={this.props.isFetching}/>}/>
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
        isFetching: state.items.isFetching
    }
};

let AppContainer = compose(connect(mapStateToProps, {setProducts, toggleIsFetching}))(App);

const AppJs = (props) => {
    return <HashRouter>
        <Provider store={store}>
            {store.isFetching ? <Preloader/> : null}
            <AppContainer/>
        </Provider>
    </HashRouter>
};

export default AppJs;
