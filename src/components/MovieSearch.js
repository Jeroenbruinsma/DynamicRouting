import React,{useState} from "react";
import axios from "axios"
import {Link} from 'react-router-dom'

export default function MovieSearch() {

    const [searchText, set_searchText] = useState("love")
    const [data, set_data] = useState([])


  const inputHandler = event => {
    set_searchText(event.target.value)
  };
  const clickHandler = (event) =>
  {
      console.log(`user ask me to search for...${searchText}..`)
      search()
  }

  const search = async() => {

   const search_movies =" http://www.omdbapi.com/?apikey=e8f84148&s=" + searchText
   const response = await axios.get(search_movies)
   console.log("response", response.data.Search);
   set_data(response.data.Search)
   
  }
  


  console.log("what is ST", searchText);
  
  return (
    <div>
      <p>Where are you searching for? </p>
      <input
        type="text"
        onChange={inputHandler}
        placeholder="Please type a search term here"
        value={searchText}
      />
      <button onClick={clickHandler}> Please search</button>
      <div className="movieData" >
            <p>found movies:</p>
            {data.map(film => <Link to={`/moviedetails/${film.imdbID}`}> <p> {film.Title} </p> </Link> )}

      </div>
    </div>
  );
}
