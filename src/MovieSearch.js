import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import './MovieSearch.css';
import axios from 'axios';
import Films from './Film/Films';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import { MovieList } from './MovieList'
const MovieSearch = () => {
  const classes = useStyles();
  const[val,setValue] = useState('');
  const[data,setData] = useState({});
  const[isLoaded,setLoad] = useState(false);

  const getData = async() => {
    console.log(val);
    const data = await MovieList(val);
    setData(data);
    if(data.length>0){
      setLoad(true);
    }
    
  }
  return(
    <div className="main-container">
      <input
      type="text" className="search" value={val} onChange={(e)=>setValue(e.target.value)}>
      </input>
      <Link onClick={event => (!val || isLoaded)?event.preventDefault():null} to={`/Film?name=${data}`}>
      <Button variant="contained" color="secondary" disableElevation onClick={getData}>Submit</Button>
      </Link>
    </div>
  );
 
}
export default MovieSearch;
