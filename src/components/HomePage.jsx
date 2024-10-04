import { React } from "react";
import "./Styles/HomePage.css"
import NavBar from "./NavBar";
import MovieDetailsContainer from "./MovieDetailsContainer";
import { useSelector } from "react-redux";

const HomePage = () => {
  const backgroundImage = useSelector((state) => state.filter.filteredMovie);
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
