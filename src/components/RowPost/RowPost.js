import React,{useEffect,useState} from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl,API} from '../../constants/constants'
import Youtube from 'react-youtube'


function RowPost(props) {
   const [urlId, seturlId] = useState([])

  const [movies,setMovies] = useState([])
useEffect(() => {
  axios.get(props.url).then(response=>{
  
    setMovies(response.data.results)
  }).catch(err=>{
   // alert('Network Error')
  })


}, [])

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};
 const handleMovie = (id)=>{
  axios.get(`movie/${id}/videos?api_key=${API}&language=en-US`).then(response=>{
   if(response.data.results.length!==0){
      seturlId(response.data.results[0])

   }
   else{
    console.log('Array empty')
   }
   
  })

 }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
             
             <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
          )}
         
         
      
        </div>
       
        {urlId && <Youtube opts={opts} videoId={urlId.key}/>}

    </div>
  )
}

export default RowPost