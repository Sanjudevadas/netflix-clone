import React,{useEffect, useState} from 'react';
import { API,imageUrl } from '../../constants/constants';
import './Banner.css'
import axios from '../../axios'

function Banner() {
  const [movie, setMovie] = useState()

  useEffect(() => {
 axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API }&language=en-US`).then((response)=>{
   console.log(response.data.results[10]);

     setMovie(response.data.results[0])

 })
  }, [])


  /*useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API}&language=en-US`)
      .then((response) => {
        console.log(response.data[0]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        // Handle the error here (e.g., display an error message)
      });
  }, []);*/
  


  
  return (
    <div
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}}
    className='banner'>
      <div className='content'>
        <h1 className='title'>{movie ? movie.name:""}</h1>
        <div className='banner_buttons'>
             <button className='button'>Play</button>
             <button className='button'>My list</button>
        </div>
         <h1 className='description'>{movie ? movie.overview:""}</h1>
      </div>

      <div className="fade_bottom">

      </div>

        </div>
  )
}

export default Banner