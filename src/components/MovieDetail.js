import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

export default function MovieDetail() {
    const [movie , setMovie] = useState("")
    const location = useParams()
                  
    console.log("what is my location?", location)

    const search = async() => {
        const specific_movie =`http://www.omdbapi.com/?i=${location.id}&apikey=e8f84148`
        const response = await axios.get(specific_movie)
        console.log("response", response.data)
        setMovie(response.data)
       }
       useEffect(() => {
           search()
      },[]);

    return (
        <div>
            Hello details
            {movie.Title}
            <img src={movie.Poster} />
            
        </div>
    )
}
