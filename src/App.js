import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Home from './contents/Home';
import CodeProject from './contents/CodeProjects';
import Navigation from './components/Navigation';
function App() {
  return (
<Router>
<Switch>
   <Route exact path="/irenecodes">
   <Navigation />
     <CodeProject />  
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
  