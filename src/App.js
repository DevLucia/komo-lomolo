import React from 'react';
import './App.css';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './guards/PrivateRoute';

function App() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
      <div className="App">
         <Switch>
              <Route exact path="/tshirts" component={TShirts} />
              <PrivateRoute exact path="/sweatShirts" component={SwatShirts} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/art" component={Art} />
              <PrivateRoute exact path="/contact" component={Contact} />
          </Switch>
      </div>
    </div>
  );
}

export default App;
