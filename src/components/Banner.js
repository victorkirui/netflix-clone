import React,{ useState,useEffect } from 'react'
import axios from '../axios'
import requests from '../requests'
import './Banner.css'

const base_url = "https://image.tmdb.org/t/p/original"

function Banner() {
    const [movie,setMovie] = useState([])

    // UseEffect runs some code based on a condition
    useEffect(()=>{ 
        // I want to do some side effects such as fetching data from an Endpoint
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals)
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)])
            return request
        }
        fetchData()
    },[])


    // Function to truncate the description text on the banner
    function truncate(str,n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    }

    return (
        <header className="banner" style={{
            backgroundImage:`URL(${base_url}${movie?.backdrop_path})`,
            backgroundSize:"cover",
            backgroundPosition:"top center",
            backgroundRepeat:"no-repeat"
        }}>
            <div className="banner__contents">
                <h2 className="title">{movie?.name || movie?.original_name || movie?.title }</h2>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <p className="description">{truncate(movie?.overview, 150)}</p>
            </div>
        </header>
    )
}

export default Banner
