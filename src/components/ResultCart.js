import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const ResultCart = ({movie}) => {
    const {watchlist,watched,addMovieToWatchList,addMovieToWatched}=useContext(GlobalContext);
    
    const storedMovieWatched=watched.find((o)=>o.id===movie.id);
    const storedMovie=watchlist.find((o)=>o.id===movie.id) 
    ? true 
    :storedMovieWatched
     ?true 
     :false;

  return (
   <div className="result-card">
    <div className="poster-wrapper">
       {movie.poster_path ?(
         <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
         alt={movie.poster_path}/>
       ) : 
       (
        <div className="filler-poster"></div>
       )}
       
    </div>
    <div className="info">
        <div className="header">
            <h3 className= "title">{movie.title}</h3>
            <h4 className="release_date">
                {movie.release_date ? movie.release_date.substring(0,4)  : "bilgisi yok"}
            </h4>
            <h4 className="">
                IMDB:<b>{movie.vote_average ? movie.vote_average : "-"}</b>
            </h4>
        </div>
        <div className="controls">
            <button className="btn"
             disabled={storedMovie}
            onClick={()=>addMovieToWatchList(movie)}>Add To Watchlist </button>
        </div>
        <div className="controls">
      <button className="btn"
       disabled={storedMovieWatched}
      onClick={()=>addMovieToWatched(movie)}>Add To Watched </button>
  </div>
    </div>
   </div>
  )
}

export default ResultCart;