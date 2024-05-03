import React, { useEffect, useState } from 'react'
import axios from "../../utils/axios"
import requests from "../../utils/request"
import '../Banner/Banner.css'

const Banner = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflexOriginals);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        }    
        fetchData()   
    }, []);
    console.log(movie);
    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "...":str;
    }
  return (
   <header
   className='banner'
   style={{
    backgroundSize:"cover",
    backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    backgroundPosition:"center center",
   }}>
    <div className='banner__contents'>
        <h1 className='banner__title'>
            {movie?.title || movie?.name || movie.original_name}
        </h1>
        <div className='banner__buttons'>
            <button className='banner_button'>Play</button>
            <button className='banner_button'>My List</button>
        </div>
        <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>
        <div className='banner__fadebottom'></div>
    </div>
   </header>
  )
}

export default Banner
