import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'


const MovieDetails = ({movies}) => {
  let {id}=useParams()
  const[details,setDetails]=useState({})
  useEffect(() => {
     setDetails(movies.filter((movie) => movie.id === id)[0])  
  
    
  }, [id])
  
  return (
    <div>
      <h1>{details.title}</h1>
      <iframe
        width="560"
        height="315"
        src={details.poster}
        title={details.title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      {details.description}
    </div>
  );
}

export default MovieDetails