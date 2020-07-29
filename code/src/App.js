import React from 'react';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Catalog from './components/Pages/Catalog/Catalog';
import Delivery from "./components/Pages/Delivery/Delivery";
import AboutUs from "./components/Pages/AboutUs/AboutUs";
import Contacts from "./components/Pages/Contacts/Contacts";
import News from "./components/Pages/News/News";
import Actions from "./components/Pages/Actions/Actions";
import Fade from 'react-reveal/Fade';
import withReveal from 'react-reveal/withReveal';
import Carousel from "./components/Carousel/CarouselBody";

function App(props) {

    return (
        <HashRouter>
            <div className="App">
                <div className={"header"}>
                    <Header/>
                </div>
                <div className={"carousel"}>
                    <Fade delay={200}>
                        <Carousel/>
                    </Fade>
                </div>
                <div className="mainContainer">
                    <Switch>
                        <Route path="/contacts" component={withReveal(Contacts, <Fade in unmountOnExit />)}/>
                        <Route path="/about_us" component={AboutUs}/>
                        <Route path="/news" component={News}/>
                        <Route path="/actions" component={Actions}/>
                        <Route path="/delivery" component={Delivery}/>
                        <Route path="/" component={Catalog}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;