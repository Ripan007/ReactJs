import React from 'react';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Service from './components/Service';
function App() {
    return (
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="./contact" component={Contact}></Route>
                <Route path="./about" component={About}></Route>
                <Route path="./service" component={Service}></Route>
                <Route path="./" component={Home}></Route>
            </Switch>


        </div>


    )
}

export default App;

// props => parent -> children
// state => within the component => class component



