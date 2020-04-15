import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './contents/Home';

function App() {
  return (
    <Router>
    <Navigation />
    <div className="App">
    <Route exact path="/"></Route>
    <Home />
    </div>
    </Router>
    );
  }
  
  export default App;
  