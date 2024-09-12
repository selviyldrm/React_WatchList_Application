import { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";


//! create context =>Bağlam oluşturmak için kullanılır.Verilerin deposu gibidir.

export const GlobalContext=createContext();

const initialState={
    watchlist:localStorage.getItem("watchlist")
    ?JSON.parse(localStorage.getItem("watchlist"))
    :[],
    watched:localStorage.getItem("watched")
    ?JSON.parse(localStorage.getItem("watched"))
    :[],
}

//! provider components =>Verilerin iletimini sağlar.

export const GlobalProvider=(props)=>{
    const [state,dispatch]=useReducer(AppReducer,initialState);
   
 useEffect(() => {
 localStorage.setItem("watchlist",JSON.stringify(state.watchlist)); 
 localStorage.setItem("watched",JSON.stringify(state.watched)); 
}, [state])
 

    const addMovieToWatchList=(movie)=>{
        dispatch({type:"ADD_MOVİE_TO_WATCHLIST",payload:movie})
    }

    const removeMovieFromWatchlist=(id)=>{
       dispatch({type:"REMOVE_MOVIE_FROM_WATCHLIST",payload:id}) 
    }

    const addMovieToWatched=(movie)=>{
        dispatch({type:"ADD_MOVIE_TO_WATCHED",payload:movie})
    }
   
    const moveToWatchList=(movie) =>{
        dispatch({type:"MOVE_TO_WATCHED",payload:movie})
    }
    const removeMovieFromWatched=(id)=>{
        dispatch({type:"REMOVE_MOVIE_FROM_WATCHED",payload:id}) 
     }
return (
    <GlobalContext.Provider 
    value={{
        watchlist:state.watchlist,
        watched:state.watched,
        addMovieToWatchList,
        removeMovieFromWatchlist,
        addMovieToWatched,
        moveToWatchList,
        removeMovieFromWatched,
        }}>
        {props.children}
    </GlobalContext.Provider>
)
}