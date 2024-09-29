import { React } from "react";
import "./Styles/MovieDetailsContainer.css";
import MovieContainer from "./MovieContainer";

const MovieDetailsContainer = () => {
  return (
    <>
      <div className="movieDetailsContainer">
        <div>MovieDetailsContainer</div>
        <MovieContainer></MovieContainer>
      </div>
    </>
  );
};

export default MovieDetailsContainer;
