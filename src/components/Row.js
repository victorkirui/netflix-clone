import React,{ useState,useEffect } from 'react'
import axios from '../axios'
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({title,fetchURL,isLarge}) {
    const [movies,setMovies] = useState([]);
    const [trailerURLId,settrailerURLId] = useState("");

    // We need a snippet of code that runs based on a condition variable
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results)
            return request;
        }
        fetchData()
    },[fetchURL])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if(trailerURLId){
            settrailerURLId("");
        }else{
                movieTrailer(movie?.name || movie?.title || "")
                .then((url) => {
                    console.log(url);
                    const urlParams = new URLSearchParams(new URL(url).search);
                    settrailerURLId(urlParams.get('v'));
                }).catch(error => console.log(error))
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>

            {/* Container */}
            <div className="row__container">
                {
                    movies.map(movie => (
                        <img key={movie.id} onClick={() => handleClick(movie)} className={`row__poster ${isLarge && "row__poster-large"}`} src={`${base_url}${isLarge ? movie.poster_path : movie.poster_path}`} alt={movie.name} />
                    ))
                }
            </div>

            { trailerURLId && <YouTube videoId={trailerURLId} opts={opts} /> }
        </div>
    )
}

export default Row
