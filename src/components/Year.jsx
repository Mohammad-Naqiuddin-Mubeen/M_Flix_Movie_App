import { React, useState } from "react";
import "./Styles/Year.css";
import { useDispatch } from "react-redux";
import { setfilterYear } from "../slice/filterYear";

const Year = () => {
  const dispatch = useDispatch();
  const [boxVisible, setBoxVisible] = useState(false);
  const getYear = (start, end) => {
    return Array.from(
      { length: end - start },
      (element, index) => start + index
    ).reverse();
  };

  const showYearBox = () => {
    setBoxVisible((state) => !state);
  };

  const getselectedYear = (e) => {
    const year = e.target.value;
    dispatch(setfilterYear(year));
    setBoxVisible((state) => !state);
  };

  const YearsList = getYear(1903, 2017);
  return (
    <>
      <i className="bi bi-calendar-week" onClick={showYearBox}></i>
      <div className={`yearbox ${boxVisible ? "open" : ""}`}>
        <h1 className="filter-title">Select Year</h1>
        <ul className="year-list">
          {YearsList.map((year, index) => {
            return (
              <li
                className="year-li"
                value={year}
                key={index}
                onClick={getselectedYear}
              >
                {year}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Year;
