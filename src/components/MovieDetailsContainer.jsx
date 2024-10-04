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
  const [singleMovie, setSingleMovie] = useState();
  const runtime = Math.floor(singleMovie?.runtime / 60) + "h " + (singleMovie?.runtime % 60) + "min"

  const getMovieDetails = (e) => {
    const id = e.currentTarget.id;
    const movie = filterMovie.find((element) => element._id === id);
    setSingleMovie(movie);
    dispatch(setFilteredMovie(movie));
  };
  // ----------------------------------------------------------------
  const fallbackImage = "./404-error.jpg";
  return (
    <>
      <div className="movieDetailsContainer">
        <div className="movieInfo">
          <div className="textInfo">
            <h1 className="title">{singleMovie?.title?.toUpperCase()}</h1>
            <p className="plot">{singleMovie?.plot}</p>
            <div className="genre">
              <p className="rating">{singleMovie?.rated || "N/A"}</p>
              <p className="runtime">{runtime || "N/A"}</p>
            </div>
            <div className="btns">
              <button className="moreInfo">More Info</button>
            </div>
          </div>
          <div className="posterInfo">
            <img src={singleMovie?.poster} alt={singleMovie?.title} />
          </div>
        </div>
        <div className="movieContainer">
          <h2>Trending Now</h2>
          <div className="movieList">
            {filterMovie?.map((movie, index) => {
              return (
                <>
                  <div
                    className="movie"
                    onMouseEnter={getMovieDetails}
                    key={index}
                    id={movie._id}
                  >
                    <img
                      src={movie.poster || fallbackImage}
                      alt={movie.title}
                    />
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
