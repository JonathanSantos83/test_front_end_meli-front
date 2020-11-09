import './App.scss';
import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import ItemDetail from './components/detail/item-detail/Item-detail';
import ItemList from './components/results/item-list/Item-list';
import Searchbar from './components/commons/searchbar/Searchbar';
import NotFound from './components/commons/notfound/Notfound';

const App = () => (
  <Fragment>
    <Searchbar />
    <Switch>
      <Route exact path='/' />
      <Route exact path='/items' component={ItemList} />
      <Route exact path='/items/:id' component={ItemDetail} />
      <Route component={NotFound} />
    </Switch>
  </Fragment>
); 

export default App;
