import React,{ useState,useEffect } from 'react'
import axios from '../axios'
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({title,fetchURL,isLarge}) {
    const [movies,setMovies] = useState([]);

    // We need a snippet of code that runs based on a condition variable
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    },[fetchURL])

    return (
        <div className="row">
            <h2>{title}</h2>

            {/* Container */}
            <div className="row__container">
                {
                    movies.map(movie => (
                        <img className={`row__poster ${isLarge && "row__poster-large"}`} src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt="movie.name" key={movie.id}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Row
