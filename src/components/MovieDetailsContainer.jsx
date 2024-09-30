import { React, useEffect, useState } from "react";
import "./Styles/MovieDetailsContainer.css";
import { useDispatch, useSelector } from "react-redux";
import apiCall from "../apiCall/apiCall";
import { setFilteredMovie } from "../slice/filterMovie";

const MovieDetailsContainer = () => {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.redux.result);
  const GetMovies = apiData.data;

  const filterMovie = GetMovies?.filter((movie) => movie.year === 2013);
  useEffect(() => {
    dispatch(apiCall());
  }, []);

  // -----------------------------------------------------------
  const [singleMovie, setSingleMovie] = useState()

  const getMovieDetails = (e) => {
    const id = e.currentTarget.id
    const movie = filterMovie.find((element) => element._id === id)
    console.log(movie);
    // console.log(filterMovie);
    setSingleMovie(movie)
    dispatch(setFilteredMovie(movie))
  }
  // ----------------------------------------------------------------
  const fallbackImage = "./404-error.jpg";
  return (
    <>
      <div className="movieDetailsContainer" >
        <div className="movieInfo">
          <div className="textInfo">
          <h1 className="title">{singleMovie?.title?.toUpperCase()}</h1>
          {/* <h1 className="title">Dr. Strangelove Or: How I Learned To Stop Worrying And Love The Bomb</h1> */}
          <p className="plot">{singleMovie?.plot}</p>
          </div>
        </div>
        {/* <MovieContainer movies={filterMovie}></MovieContainer> */}
        <div className="movieContainer">
      <h2>Trending Now</h2>
      <div className="movieList">
        {filterMovie?.map((movie, index) => {
          return (
            <>
              <div className="movie" onMouseEnter={getMovieDetails} key={index} id={movie._id}>
                <img src={movie.poster || fallbackImage} alt={movie.title} />
              </div>
            </>
          );
        })}
      </div>
    </div>
      </div>
    </>
  );
};

export default MovieDetailsContainer;
