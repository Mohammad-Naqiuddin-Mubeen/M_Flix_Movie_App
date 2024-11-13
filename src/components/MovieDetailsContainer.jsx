import { React, useEffect, useState } from "react";
import "./Styles/MovieDetailsContainer.css";
import { useDispatch, useSelector } from "react-redux";
import apiCall from "../apiCall/apiCall";
import { setFilteredMovie } from "../slice/filterMovie";
import SpaceAstronautLoading from "./Loader/SpaceAstronautLoading";

const MovieDetailsContainer = () => {
  const dispatch = useDispatch();
  const [GetMovies, setGetMovies] = useState(null)
  const [singleMovie, setSingleMovie] = useState();
  const apiData = useSelector((state) => state.redux.result.data);
  const movieYear = useSelector((movie) => movie.year.filterYear)

  const filterMovie = apiData?.filter((movie) => movie.year === movieYear);
  useEffect(() => {
    dispatch(apiCall());
  }, []);
  useEffect(() => {
    setGetMovies(filterMovie)
    setTimeout(() => {
      setSingleMovie(filterMovie[0])
    },1000)
  }, [apiData && movieYear]);
  

  // -----------------------------------------------------------
  
  const runtime = Math.floor(singleMovie?.runtime / 60) + "h " + (singleMovie?.runtime % 60) + "min"
  
  const getMovieDetails = (e) => {
    const id = e.currentTarget.id;
    const movie = filterMovie.find((element) => element._id === id);
    setSingleMovie(movie);
    dispatch(setFilteredMovie(movie));
  };
  // ----------------------------------------------------------------
  const fallbackImage = "./404-error.jpg";


  if (!GetMovies) {
    return <SpaceAstronautLoading/>
  } else {
  return (
    <>
      <div className="movieDetailsContainer">
      {!singleMovie ? <div className="empty"></div> : 
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
   }
        <div className="movieContainer">
          <h2>Trending Now</h2>
          <div className="movieList">
            {GetMovies?.map((movie, index) => {
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

}

export default MovieDetailsContainer;
