import React from "react";
import Hero from "./Hero";
import { useParams} from "react-router";
import {useState, useEffect} from "react"

export default function MovieView() {
    const {id} = useParams()
 
    
    const [movieDetails, setMovieDetails] = useState({})
    useEffect(()=>{
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0359fd758c84889f671ad1bcaab6eada&language=en-US`)
                .then(response => response.json())
                .then(data =>{
                    setMovieDetails(data)

                })
    }, [id])
  return (
    <div>
      <Hero text={movieDetails.original_title} />
    
    </div>
  );
}
