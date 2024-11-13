import { React } from "react";
import "./Styles/HomePage.css"
import NavBar from "./NavBar";
import MovieDetailsContainer from "./MovieDetailsContainer";

const HomePage = () => {
  return (
    <>
      <main>
        <div className="navBar">
            <NavBar></NavBar>
        </div>
        <div className="contentBox">
            <MovieDetailsContainer></MovieDetailsContainer>
        </div>
      </main>
    </>
  );
};

export default HomePage;
