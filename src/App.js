import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home.js';
import Bakery from './components/pages/Bakery.js';

function App() {
  return (
    <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/bakery" component={Bakery}/>
             
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
  );
}

export default App;
