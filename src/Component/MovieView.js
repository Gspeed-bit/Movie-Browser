import React from "react";
import Hero from "./Hero";
import { useParams} from "react-router";
import {useState, useEffect} from "react"

export default function MovieView() {
    const {id} = useParams()
    const [isLoading,setIsLoading] = useState(true)
    
    const [movieDetails, setMovieDetails] = useState({})
    useEffect(()=>{
          fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=0359fd758c84889f671ad1bcaab6eada&language=en-US`)
                .then(response => response.json())
                .then(data =>{
                        setMovieDetails(data)
                        setIsLoading(false)
                })
    }, [id])


    function renderMovieDetails(){
        if(isLoading){
            return <Hero text="Loading..."/>
        } 
        if(movieDetails){
              return <Hero text={movieDetails.original_title} />
        }

    }
  return(
<div>
  {  renderMovieDetails()}
</div>
  ) 
  
}
