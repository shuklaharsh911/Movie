import React, {Component} from 'react';
import {useState} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { MovieList } from './MovieList'
import axios from 'axios';
import Films from './Film/Films';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const App = () => {
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
  if(!isLoaded){
  return(
    <div className="main-container">
      <input
      type="text" className="search" value={val} onChange={(e)=>setValue(e.target.value)}>
      </input>
      <Button variant="contained" color="secondary" disableElevation onClick={getData}>Submit</Button>

    </div>
  );
 }
 else{
   return(
    <main className={classes.content}>
    <div className={classes.toolbar} />
    <Grid container justify="center" spacing={4}>
      {data.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
          <Films item={product}  />
        </Grid>
      ))}
    </Grid>
  </main>
   );
  
 }
}
export default App;
