import { React, useEffect } from "react";
import "./Styles/MovieContainer.css";
import { useDispatch, useSelector } from "react-redux";
import apiCall from "../apiCall/apiCall";

const MovieContainer = () => {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.redux.result);
  const GetMovies = apiData.data;

  const filterMovie = GetMovies?.filter((movie) => movie.year === 2015);
  console.log(filterMovie);

  useEffect(() => {
    dispatch(apiCall());
  }, []);
  return (
    <div className="movieContainer">
      <h2>Trending Now</h2>
      <div className="movieList">
        {filterMovie?.map((movie, index) => {
          return (
            <>
              <div className="movie">
                <img src={movie.poster} alt={movie.title} />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MovieContainer;
