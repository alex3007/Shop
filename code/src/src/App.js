import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Catalog from './Components/Pages/Catalog/Catalog';
import Delivery from "./Components/Pages/Delivery/Delivery";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import Contacts from "./Components/Pages/Contacts/Contacts";
import News from "./Components/Pages/News/News";
import Actions from "./Components/Pages/Actions/Actions";
import Fade from 'react-reveal/Fade';
import withReveal from 'react-reveal/withReveal';

function App(props) {
    const Effect =<Fade/>;

return (
    <div className="App">
        <div className={"header"}>
            <Header/>
        </div>
        <div className="mainContainer">
            <Switch>
                <Route path="/contacts" component={withReveal(Contacts, Effect)}/>)
                <Route path="/about_us" component={withReveal(AboutUs, Effect)}/>
                <Route path="/news" component={withReveal(News, Effect)}/>
                <Route path="/actions" component={withReveal(Actions, Effect)}/>
                <Route path="/delivery" component={withReveal(Delivery, Effect)}/>
                <Route path="/" component={Catalog}/>
            </Switch>
        </div>
        <Footer/>
    </div>
);
}

export default App;