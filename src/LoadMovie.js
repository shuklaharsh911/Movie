import React, {Component, useEffect, useState} from 'react';
import queryString from 'query-string';
import ReactDOM from 'react-dom';
import { MovieList } from './MovieList'
import Films from './Film/Films';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const LoadMovie = ({location}) => {
   const classes = useStyles();
   
   const [data,setData] = useState([]) ;

   useEffect(() => {
       const val = queryString.parse(location.search);
       getData(val.name);
   },[]);

   const getData = async (val) =>{
    console.log(val);
    const data = await MovieList(val);
    setData(data);
   }
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

export default LoadMovie;