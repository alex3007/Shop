import React from 'react';
import './App.css';
import {withRouter,Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Catalog from './Components/Pages/Catalog/Catalog';
import Delivery from "./Components/Pages/Delivery/Delivery";
import AboutUs from "./Components/Pages/AboutUs/AboutUs";
import Contacts from "./Components/Pages/Contacts/Contacts";
import News from "./Components/Pages/News/News";
import Actions from "./Components/Pages/Actions/Actions";
import ItemsContainer from "./Components/Items/ItemsContainer";


function App(props) {
    return (
        <div className="App">
            <div className={"header"}>
                <Header/>
            </div>
            <div className="mainContainer">
                <Switch>
                    <Route path="/contacts" component={Contacts}/>
                    <Route path="/about_us" component={AboutUs}/>
                    <Route path="/news" component={News}/>
                    <Route path="/actions" component={Actions}/>
                    <Route path="/delivery" component={Delivery}/>
                    <Route path="/" component={Catalog}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

export default App;