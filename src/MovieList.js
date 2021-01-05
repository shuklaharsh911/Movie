import axios from 'axios';

 export const MovieList = async (value) => {
    
    const data = await fetch(`http://www.omdbapi.com/?apikey=a4618e76&s=${value}`);
    const response = await data;
    const jsonData = await response.json();
     return jsonData["Search"];
 }

