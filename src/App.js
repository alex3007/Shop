import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import Delivery from "./Components/Pages/Delivery/Delivery";


function App(props) {

    return (
        <div className="App">
            <div className={"header"}>
                <Header/>
            </div>
            <div className="mainContainer">
                    <Route exact path="" component={Home}/>
                    <Route path="/delivery" component={Delivery}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;