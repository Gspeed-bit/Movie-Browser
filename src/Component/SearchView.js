import React from "react";
import Hero from "./Hero";


const MovieCard = ({movie}) =>{
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return(
    <div className="col-lg-3 col-md-3 col-2 my-4"> 
    <div className="card">
  <img src={posterUrl} className="card-img-top" alt={movie.original_title}/>
  <div className="card-body">
    <h5 className="card-title">{movie.original_title}</h5>
    <a href="/" className="btn btn-primary">Show Details</a>
  </div>
</div> 
</div>
  )
}

export default function SearchView({keyWord, searchResults}) { //

    const title = `You are searching for ${keyWord}`

    const resultHtml = searchResults.map((obj,i)=>{
        return <MovieCard movie={obj} key={i}>
            
            
        </MovieCard>
    })

  return (
    <div>
      <Hero text={title} />
     {resultHtml && 
    <div className= "container">
      <div className= "row">
        {resultHtml}
    </div>
    </div>
     }
    </div>
  );
}


// TMDB API key= 0359fd758c84889f671ad1bcaab6eada
// example link for movie screaches = https://api.themoviedb.org/3/search/movie?api_key=0359fd758c84889f671ad1bcaab6eada&language=en-US&query=start%20wars&page=1&include_adult=false





