import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home.js';
import Bakery from './components/pages/Bakery.js';
import Tearoom from './components/pages/Tearoom.js';
import Delivery from './components/pages/Delivery.js';
import About from './components/pages/About.js';

function App() {
  return (
    <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/bakery" component={Bakery}/>
             <Route path="/tearoom" component={Tearoom}/>
             <Route path="/delivery" component={Delivery}/>
             <Route path="/about" component={About}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
  );
}

export default App;
