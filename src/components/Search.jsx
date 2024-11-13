import { React, useState } from "react";
import "./Styles/Search.css";
import { useSelector } from "react-redux";
import SearchResultLoader from "./Loader/SearchResultLoader";

const Search = () => {
  const [boxVisible, setBoxVisible] = useState(false);
  const [srchRslt, setSrchRslt] = useState();
  const movieData = useSelector((data) => data.redux.result.data);

  const showSearch = () => {
    setBoxVisible((state) => !state);
    document.querySelector(".srch-input").value = "";
  };

  // Searching movies Logic
  const searchMovies = (e) => {
    const input = e.target.value;
    setSrchRslt(false);
    setTimeout(() => {
      if (input === "") {
        setSrchRslt();
      } else {
        const SearchArray = movieData
          ?.filter((movie) =>
            movie.title.toLowerCase().includes(input.toLowerCase())
          )
          .reverse()
          .slice(0, 10);
        setSrchRslt(SearchArray);
      }
    }, 1000);
  };

  // Search Result With Animation and Results
  const searchDetail = () => {
    const inputValue = document.querySelector(".srch-input").value;
    if (!srchRslt || inputValue === "") {
      return <SearchResultLoader />;
    } else if (srchRslt.length === 0) {
      return (
        <div className="not-found">
          <h2>No Result Found</h2>
        </div>
      );
      // }
    } else {
      return srchRslt.map((movie, index) => {
        return (
          <div className="search-result-movie" key={index}>
            <img src={movie.poster} alt={movie.title} />
            <h1 className="movie-title">{movie.title}</h1>
          </div>
        );
      });
    }
  };

  // Search Page Logic
  const searchPage = () => {
    const inputValue = document.querySelector(".srch-input").value;
    if (inputValue === "") {
      alert("Please type atleast 3 characters");
    } else {
      console.log(inputValue);
    }
  };
  return (
    <>
      <i className="bi bi-search" onClick={showSearch}></i>
      <div className={`search-box ${boxVisible ? "open" : ""}`}>
        <div className="srch-box">
          <h1 className="srch-title">SEARCH</h1>
          <div className="input-btn">
            <input
              type="search"
              className="srch-input"
              onChange={searchMovies}
            />
            <button className="srch-btn" onClick={searchPage}>
              <i class="bi bi-binoculars"></i>
            </button>
          </div>
          <div className="srch-result">{searchDetail()}</div>
        </div>
      </div>
    </>
  );
};

export default Search;
