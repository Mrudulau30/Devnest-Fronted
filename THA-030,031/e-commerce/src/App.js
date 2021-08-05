
import React from 'react'

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

import Home from './additionals/Home'
import Offer from './additionals/Offer'
import Best_seller from './additionals/Best_seller'
import Header from './components/navbar/nav'
function App() {

  
  return (
    <div className="App">
    
    <Router>

    <Switch>
         <Header />
         <Route exact path='/offer'>
           <Offer />
         </Route>
         <Route exact path='/home'>
           <Home />
         </Route>
         <Route exact path='/offer'>
           <Offer />
         </Route>

        

         </Switch>
         </Router>
  
    </div>
  
  );
}

export default App;
