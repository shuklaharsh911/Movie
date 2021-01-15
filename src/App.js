import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieSearch from './MovieSearch'; 
import Films from './Film/Films';

const App = () => (
  <Router>
    <Route path="/" exact component={MovieSearch} />
    <Route path="/Film" component={Films} />
  </Router>

);
 export default App;
