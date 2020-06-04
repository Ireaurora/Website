import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './contents/Home';
import CodeProject from './contents/CodeProjects';

function App() {
  return (
<Router>
<Switch>
   <Route path="/irenecodes">
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
  