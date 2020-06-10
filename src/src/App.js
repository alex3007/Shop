import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Catalog from './Components/Pages/Catalog/Catalog';
import Delivery from "./Components/Pages/Delivery/Delivery";


function App(props) {
    return (
        <div className="App">
            <div className={"header"}>
                <Header/>
            </div>
            <div className="mainContainer">
                <Switch>
                    <Route path="/delivery" component={Delivery}/>
                    <Route path="/" component={Catalog}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    );
}

export default App;