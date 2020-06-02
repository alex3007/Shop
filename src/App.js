import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import ItemsContainer from './Components/Items/ItemsContainer';



function App(props) {

    return (
        <div className="App">
            <div className={"header"}>
                <Header/>
            </div>
            <div className="mainContainer">
                <Route path="" component={ItemsContainer}/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;