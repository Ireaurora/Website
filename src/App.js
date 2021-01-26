import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Home from './contents/Home';
import SpeakingPage from './contents/SpeakingPage';
import Navigation from './components/Navigation';
function App() {
  return (
<Router>
<Switch>
   <Route exact path="/irenecodes">
   <Navigation />
     <SpeakingPage />  
   </Route>
   <Route path="/">
   <Navigation />
   <div className="App">
   <Home />
   </div>  
   </Route>
 </Switch>
</Router>
    );
  }
  
  export default App;