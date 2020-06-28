import React from 'react';
import './App.css';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Catalog from './Components/Pages/Catalog/Catalog';
import Delivery from "./Components/Pages/Delivery/Delivery";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import Contacts from "./Components/Pages/Contacts/Contacts";
import News from "./Components/Pages/News/News";
import Actions from "./Components/Pages/Actions/Actions";
import Fade from 'react-reveal/Fade';
import CarouselItem from "./Components/Carousel/CarouselItem";

function App(props) {

    return (
        <HashRouter>
            <div className="App">
                <div className={"header"}>
                    <Header/>
                </div>
                <div className={"carousel"}>
                    <Fade delay={200}>
                        <CarouselItem/>
                    </Fade>
                </div>
                <div className="mainContainer">
                    <Switch>
                        <Route path="/contacts" component={Contacts}/>)
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