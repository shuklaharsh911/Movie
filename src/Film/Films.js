import React, {useEffect,useState} from 'react';
import queryString from 'query-string'; 
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { MovieList } from '../MovieList'
import useStyles from './styles';
import { getDefaultNormalizer } from '@testing-library/react';

const Films = ({location}) => {

  const [data,setData] = useState('');
  const [isLoading,setLoading] = useState(true);

  useEffect(() => {
      const val = queryString.parse(location.search);
      console.log(val);
  })
  const classes = useStyles();
  if(isLoading){
  return (
    <h1>F</h1>
  );
  }
  else{
    return(
      <h1>Loaded</h1>
    );
  }
  
};

export default Films;