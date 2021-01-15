import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieSearch from './MovieSearch'; 
import Films from './LoadMovie';
import LoadMovie from './LoadMovie';

const App = () => (
  <Router>
    <Route path="/" exact component={MovieSearch} />
    <Route path="/Film" component={LoadMovie} />
  </Router>

);
 export default App;
