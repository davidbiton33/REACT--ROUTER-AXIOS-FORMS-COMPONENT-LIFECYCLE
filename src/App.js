import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './home';
import CompLifeCycle from './compLifeCycle';
import UserData from './userData';
import About from './about';
import Contact from './contact';
import Finish from './finish';
import Forms from './forms';

function App() {
  return (
    <div className="App">
<BrowserRouter>
    <Switch>
 <Route path='/' exact component={Home} /> 
 <Route path='/contact'  component={Contact} /> 
 <Route path='/finish'  component={Finish} /> 
 <Route path='/forms'  component={Forms} /> 


 <Route path='/about'  component={About} /> 

<Route path='/lifecycle'  component={CompLifeCycle} />

<Route path='/userdata' component={UserData} />
    </Switch>
</BrowserRouter>

    </div>
  );
}

export default App;
