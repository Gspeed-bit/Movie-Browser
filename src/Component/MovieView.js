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
      const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
      const backdropUrl = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`

      return(
          <div>
          <Hero text={movieDetails.original_title} backdrop={backdropUrl}/>
        <div className="container my-5"> 
                <div className="row"> 
                    <div className="col-md-3"> 
                    {posterPath && 
                <img src={posterPath} alt="..." className="img-fluid shadow rounded" />
                    }
                    </div>
                <div className="col-md-9"> 
                    <h2>{movieDetails.original_title}</h2>
                    <p className="lead">{movieDetails.overview}</p>
                    </div>
  </div>
  </div>
</div>
  ) 
  
}

}
return renderMovieDetails()
}

