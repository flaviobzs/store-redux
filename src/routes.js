import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

// import { Container } from './styles';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact componet={Home} />
      <Route path="/cart" componet={Cart} />
    </Switch>
  );
}
