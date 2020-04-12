import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './contents/Home';
import About from './contents/About';
import Education from './contents/Education';
import Skills from './contents/Skills';
import Contact from './contents/Contact';


function App() {
  return (
    <Router>
    <Navigation />
    <div className="App">
    <Route exact path="/">
    <Home />
    </Route>
    </div>
    </Router>
    );
  }
  
  export default App;
  