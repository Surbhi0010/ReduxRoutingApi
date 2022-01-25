import React from 'react';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './containers/header';

import ProductDetails from './containers/ProductDetails';
import ProductListings from './containers/ProductListings';


const App = () => {
  return <div>
  <Router>

  <Header/>
  <Switch>
  <Route exact path='/' component={ProductListings}/>
  <Route exact path='/product/:productId' component={ProductDetails}/>
  <Route>404 NOT FOUND</Route></Switch>
  </Router>
  
  </div>;
};

export default App;
