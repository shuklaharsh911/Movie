import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Films from './Film/Films';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import './App.css';
import { MovieList } from './MovieList'
const MovieSearch = () => {
  const classes = useStyles();
  const[val,setValue] = useState('');
  const[data,setData] = useState({});
  const[isLoaded,setLoad] = useState(false);

  return(
    <div className="main-container">
      <input
      type="text" className="search" value={val} onChange={(e)=>setValue(e.target.value)}>
      </input>
      <Link onClick={event => (!val)?event.preventDefault():null} to={`/Film?name=${val}`}>
      <Button variant="contained" color="secondary" disableElevation >Submit</Button>
      </Link>
    </div>
  );
 
}
export default MovieSearch;
