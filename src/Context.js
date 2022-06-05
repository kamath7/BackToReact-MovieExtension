import { createContext, useState } from "react";

export const MovieContext = createContext()

export const MovieProvider = (props)=>{
    const [myMovies, setMyMovies] = useState([]);
    return (
        <MovieContext.Provider value={[myMovies, setMyMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}