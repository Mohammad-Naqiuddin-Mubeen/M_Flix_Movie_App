import { React, useState } from "react";
import "./Styles/MovieContainer.css";

const MovieContainer = ({movies}) => {
  const [singleMovie, setSingleMovie] = useState({})

  const getMovieDetails = (e) => {
    const id = e.currentTarget.id
    const movie = movies.filter((element) => element._id === id)
    console.log(movie);
    setSingleMovie(movie)
  }
  const fallbackImage = "./404-error.jpg";
  return (
    <div className="movieContainer">
      <h2>Trending Now</h2>
      <div className="movieList">
        {/* <p>Mov</p> */}
        {movies?.map((movie, index) => {
          return (
            <>
              <div className="movie" onMouseEnter={getMovieDetails} key={index} id={movie._id}>
                <img src={movie.poster || fallbackImage} onError={imgFallBack} alt={movie.title} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MovieContainer;
