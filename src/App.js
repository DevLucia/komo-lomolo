import React from 'react';
import './App.css';
import Header from './components/header/header';
import Menu from './components/menu/menu';
import { Switch, Route } from 'react-router-dom';

import TShirt from './components/tShirt/tShirt';
import SweatShirt from './sweatShirt/sweatShirt';
import Home from './components/Home/home';
import Art from './components/art/art';
import Contact from './components/contact/contact';

function App() {
  return (
    <div>
      <Header></Header>
      <Menu></Menu>
      <div className="App">
         <Switch>
              <Route exact path="/tshirts" component={TShirt} />
              <Route exact path="/sweatShirts" component={SweatShirt} />
              <Route exact path="/" component={Home} />
              <Route exact path="/art" component={Art} />
              <Route exact path="/contact" component={Contact} />
          </Switch>
      </div>
    </div>
  );
}

export default App;
